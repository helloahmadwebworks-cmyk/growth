"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TrendingUp } from "lucide-react";

// Key Global City Hubs (lat, lng, name)
const CITY_HUBS = [
  { name: "San Francisco", lat: 37.77, lng: -122.42, color: "#D8B477" },
  { name: "New York", lat: 40.71, lng: -74.01, color: "#D8B477" },
  { name: "Toronto", lat: 43.65, lng: -79.38, color: "#D8B477" },
  { name: "London", lat: 51.51, lng: -0.13, color: "#237A72" },
  { name: "Frankfurt", lat: 50.11, lng: 8.68, color: "#237A72" },
  { name: "Dubai", lat: 25.20, lng: 55.27, color: "#D8B477" },
  { name: "Riyadh", lat: 24.71, lng: 46.68, color: "#D8B477" },
  { name: "Singapore", lat: 1.35, lng: 103.82, color: "#237A72" },
  { name: "Tokyo", lat: 35.68, lng: 139.69, color: "#D8B477" },
  { name: "Sydney", lat: -33.87, lng: 151.21, color: "#D8B477" },
];

// Great-Circle Arc Connections [fromIndex, toIndex]
const ARCS: [number, number][] = [
  [0, 1], // SF -> NY
  [1, 2], // NY -> Toronto
  [1, 3], // NY -> London
  [2, 3], // Toronto -> London
  [3, 4], // London -> Frankfurt
  [3, 5], // London -> Dubai
  [4, 5], // Frankfurt -> Dubai
  [5, 6], // Dubai -> Riyadh
  [5, 7], // Dubai -> Singapore
  [7, 8], // Singapore -> Tokyo
  [7, 9], // Singapore -> Sydney
];

// Simplified high-density continental landmass point clusters [lat, lng]
function generateLandmassPoints(): [number, number][] {
  const points: [number, number][] = [];

  // Helper to add point clusters with randomized jitter
  const addCluster = (latCenter: number, lngCenter: number, latRadius: number, lngRadius: number, count: number) => {
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const r = Math.sqrt(v);
      const lat = latCenter + r * latRadius * Math.sin(theta);
      const lng = lngCenter + r * lngRadius * Math.cos(theta);
      points.push([lat, lng]);
    }
  };

  // North America
  addCluster(42, -98, 14, 25, 90);
  addCluster(52, -110, 10, 22, 50);
  addCluster(34, -84, 8, 14, 45);
  addCluster(24, -102, 6, 8, 30);

  // South America
  addCluster(-12, -55, 14, 12, 60);
  addCluster(-28, -62, 10, 8, 40);

  // Europe & UK
  addCluster(52, 10, 8, 15, 80);
  addCluster(54, -2, 4, 4, 30); // UK
  addCluster(44, 4, 6, 10, 50);

  // Africa
  addCluster(20, 18, 12, 18, 65);
  addCluster(-2, 24, 14, 14, 55);
  addCluster(-26, 26, 8, 8, 35);

  // Middle East / Gulf Region
  addCluster(26, 48, 7, 10, 45);

  // Asia (India, East Asia, SE Asia)
  addCluster(22, 78, 10, 10, 60);
  addCluster(34, 106, 12, 18, 90);
  addCluster(48, 90, 8, 25, 45);
  addCluster(36, 138, 5, 5, 35); // Japan
  addCluster(5, 110, 8, 12, 45); // SE Asia

  // Australia & New Zealand
  addCluster(-25, 134, 10, 14, 60);
  addCluster(-36, 146, 5, 6, 30);
  addCluster(-41, 173, 5, 3, 20); // NZ

  return points;
}

export default function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [use3D, setUse3D] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      queueMicrotask(() => setReducedMotion(true));
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      queueMicrotask(() => setUse3D(false));
      return;
    }

    const landPoints = generateLandmassPoints();
    let rotationAngle = -0.6; // Start showing Atlantic/Europe/Americas
    const globeTilt = 0.36; // ~20.6 degree tilt
    const rotationSpeed = 0.0035; // Slow, majestic continuous rotation

    // Setup high-DPI scaling
    let width = canvas.clientWidth || 480;
    let height = canvas.clientHeight || 480;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.clientWidth || 480;
      height = canvas.clientHeight || 480;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);

    // Spherical 3D math projection
    const project = (lat: number, lng: number, radius: number, rot: number) => {
      const phi = (lat * Math.PI) / 180;
      const theta = ((lng + 180) * Math.PI) / 180 + rot;

      // Coordinate on sphere
      const x = -radius * Math.cos(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi);
      const z = radius * Math.cos(phi) * Math.sin(theta);

      // Apply polar tilt (around X axis)
      const cosT = Math.cos(globeTilt);
      const sinT = Math.sin(globeTilt);
      const yTilted = y * cosT - z * sinT;
      const zTilted = y * sinT + z * cosT;

      return {
        x: x + width / 2,
        y: -yTilted + height / 2,
        z: zTilted,
        visible: zTilted > -radius * 0.15, // Slight back-curve visibility
      };
    };

    let pulseTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.38;

      rotationAngle += rotationSpeed;
      pulseTime += 0.02;

      // 1. Ambient Outer Halo Glow
      const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.85, cx, cy, radius * 1.35);
      glowGrad.addColorStop(0, "rgba(216, 180, 119, 0.16)");
      glowGrad.addColorStop(0.4, "rgba(35, 122, 114, 0.12)");
      glowGrad.addColorStop(0.8, "rgba(16, 26, 36, 0.05)");
      glowGrad.addColorStop(1, "rgba(16, 26, 36, 0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // 2. Dark Globe Sphere Base with Deep Space Vignette
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.clip();

      const sphereGrad = ctx.createRadialGradient(cx - radius * 0.3, cy - radius * 0.3, radius * 0.1, cx, cy, radius);
      sphereGrad.addColorStop(0, "#121E2B");
      sphereGrad.addColorStop(0.5, "#0E1722");
      sphereGrad.addColorStop(0.85, "#091018");
      sphereGrad.addColorStop(1, "#050A0F");
      ctx.fillStyle = sphereGrad;
      ctx.fill();

      // Latitude / Longitude Subtle Wireframe Grid Lines
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgba(42, 62, 84, 0.25)";
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        let first = true;
        for (let lng = -180; lng <= 180; lng += 10) {
          const p = project(lat, lng, radius, rotationAngle);
          if (p.z > 0) {
            if (first) {
              ctx.moveTo(p.x, p.y);
              first = false;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      // 3. Render Continental Landmass Constellation
      for (let i = 0; i < landPoints.length; i++) {
        const [lat, lng] = landPoints[i];
        const p = project(lat, lng, radius, rotationAngle);

        if (p.z > 0) {
          // Point brightness based on depth (Fresnel limb lighting)
          const depthRatio = Math.max(0, p.z / radius);
          const alpha = 0.2 + depthRatio * 0.65;
          const pointSize = 1.0 + depthRatio * 1.1;

          ctx.fillStyle = `rgba(216, 180, 119, ${alpha * 0.75})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, pointSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 4. Render 3D Great-Circle Network Arcs
      for (const [fromIdx, toIdx] of ARCS) {
        const fromCity = CITY_HUBS[fromIdx];
        const toCity = CITY_HUBS[toIdx];

        const pStart = project(fromCity.lat, fromCity.lng, radius, rotationAngle);
        const pEnd = project(toCity.lat, toCity.lng, radius, rotationAngle);

        const avgZ = (pStart.z + pEnd.z) / 2;

        if (pStart.visible || pEnd.visible) {
          const arcPoints: { x: number; y: number; z: number }[] = [];
          const steps = 30;

          for (let step = 0; step <= steps; step++) {
            const t = step / steps;
            // Interpolate spherical coords
            const currLat = fromCity.lat + (toCity.lat - fromCity.lat) * t;
            const currLng = fromCity.lng + (toCity.lng - fromCity.lng) * t;
            // Arc elevation peak in the center
            const altitude = Math.sin(t * Math.PI) * (radius * 0.18);
            const p = project(currLat, currLng, radius + altitude, rotationAngle);
            arcPoints.push(p);
          }

          // Draw Arc Line
          ctx.beginPath();
          ctx.moveTo(arcPoints[0].x, arcPoints[0].y);
          for (let k = 1; k < arcPoints.length; k++) {
            ctx.lineTo(arcPoints[k].x, arcPoints[k].y);
          }

          const arcAlpha = Math.max(0.08, Math.min(0.65, (avgZ + radius * 0.5) / (radius * 1.5)));
          ctx.strokeStyle = `rgba(216, 180, 119, ${arcAlpha * 0.6})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // 5. Flowing Light Pulse traversing along the arc
          const pulseOffset = (pulseTime * 0.6 + (fromIdx * 0.23)) % 1;
          const targetIndex = Math.floor(pulseOffset * (arcPoints.length - 1));
          const pulsePoint = arcPoints[targetIndex];

          if (pulsePoint && pulsePoint.z > -radius * 0.2) {
            const pulseAlpha = Math.max(0.2, (pulsePoint.z + radius * 0.5) / (radius * 1.5));
            ctx.fillStyle = `rgba(255, 243, 214, ${pulseAlpha})`;
            ctx.beginPath();
            ctx.arc(pulsePoint.x, pulsePoint.y, 2.5, 0, Math.PI * 2);
            ctx.fill();

            // Pulse glowing halo
            ctx.fillStyle = `rgba(35, 122, 114, ${pulseAlpha * 0.7})`;
            ctx.beginPath();
            ctx.arc(pulsePoint.x, pulsePoint.y, 5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // 6. City Nodes & Pulsing Radar Rings
      for (let i = 0; i < CITY_HUBS.length; i++) {
        const city = CITY_HUBS[i];
        const p = project(city.lat, city.lng, radius, rotationAngle);

        if (p.z > 0) {
          const depthAlpha = Math.max(0.3, p.z / radius);

          // City core glow point
          ctx.fillStyle = city.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
          ctx.fill();

          // Outer glowing beacon ring
          const ringRadius = 3 + ((pulseTime * 15 + i * 4) % 12);
          const ringAlpha = Math.max(0, 1 - (ringRadius - 3) / 12) * depthAlpha;

          ctx.strokeStyle = `rgba(216, 180, 119, ${ringAlpha * 0.8})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(p.x, p.y, ringRadius, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // Sphere Edge Vignette & Specular Highlight
      const rimGrad = ctx.createRadialGradient(cx, cy, radius * 0.88, cx, cy, radius);
      rimGrad.addColorStop(0, "rgba(16, 26, 36, 0)");
      rimGrad.addColorStop(0.7, "rgba(16, 26, 36, 0.4)");
      rimGrad.addColorStop(1, "rgba(5, 10, 15, 0.95)");
      ctx.fillStyle = rimGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // Atmospheric Edge Rim Illumination
      ctx.strokeStyle = "rgba(216, 180, 119, 0.35)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.restore();

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [use3D, reducedMotion]);

  return (
    <div className="relative w-full max-w-[480px] aspect-square rounded-3xl overflow-hidden border border-[#223244]/80 shadow-2xl shadow-black/80 bg-[#0C141C] group">
      {/* 3D Canvas Animated Globe */}
      {use3D && !reducedMotion ? (
        <canvas
          ref={canvasRef}
          className="w-full h-full block cursor-grab active:cursor-grabbing transition-transform duration-700 group-hover:scale-105"
          aria-label="Interactive 3D rotating globe showing active global digital growth systems"
          role="img"
        />
      ) : (
        /* Static Image Fallback (For prefers-reduced-motion or unsupported canvas) */
        <Image
          src="/images/hero-globe.jpg"
          alt="GrowByMasters Global Digital Connectivity and Growth Engine"
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 480px"
        />
      )}

      {/* Subtle bottom vignette to blend naturally into dark navy hero */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#101A24]/90 via-transparent to-transparent pointer-events-none" />

      {/* Floating Metrics Badge 1 (Top Right) */}
      <div className="absolute top-5 right-5 bg-[#101A24]/90 backdrop-blur-md border border-[#223244] px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2.5 z-10 pointer-events-none">
        <div className="w-2.5 h-2.5 rounded-full bg-[#237A72] animate-ping" />
        <div className="text-[11px] font-medium text-white">
          Live Attribution: <span className="text-[#237A72]">Active</span>
        </div>
      </div>

      {/* Floating Metrics Badge 2 (Bottom Left) */}
      <div className="absolute bottom-5 left-5 bg-[#101A24]/90 backdrop-blur-md border border-[#223244] px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-3 z-10 pointer-events-none">
        <div className="w-8 h-8 rounded-lg bg-[#D8B477]/15 flex items-center justify-center">
          <TrendingUp className="w-4 h-4 text-[#D8B477]" />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-[#8C959D]">
            Average Pipeline Lift
          </div>
          <div className="text-sm font-semibold text-white">
            +200% Inbound Leads
          </div>
        </div>
      </div>
    </div>
  );
}
