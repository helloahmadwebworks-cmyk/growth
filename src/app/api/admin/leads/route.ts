import { NextResponse } from "next/server";
import { getStoredLeads, updateLeadStatus } from "@/lib/leadStorage";
import { PipelineStage } from "@/lib/crmService";

/**
 * Protected Admin Endpoint for Lead Inspection
 * Requires header: Authorization: Bearer <ADMIN_API_KEY>
 * Never exposes private pipeline data publicly.
 */
export async function GET(request: Request) {
  const adminApiKey = process.env.ADMIN_API_KEY;

  // If no ADMIN_API_KEY is configured, the endpoint remains locked
  if (!adminApiKey) {
    return NextResponse.json(
      { error: "Administrative lead API is disabled. Configure ADMIN_API_KEY in environment variables." },
      { status: 403 }
    );
  }

  const authHeader = request.headers.get("authorization");
  const token = authHeader?.replace(/^Bearer\s+/i, "").trim();

  if (!token || token !== adminApiKey) {
    return NextResponse.json(
      { error: "Unauthorized access. Valid administrative bearer token required." },
      { status: 401 }
    );
  }

  const leads = getStoredLeads();

  return NextResponse.json(
    {
      totalLeads: leads.length,
      leads: leads.map((lead) => ({
        referenceId: lead.referenceId,
        timestamp: lead.timestamp,
        businessName: lead.businessName,
        contactName: lead.fullName,
        businessEmail: lead.businessEmail,
        website: lead.businessWebsite,
        phone: lead.phone,
        preferredContactMethod: lead.preferredContactMethod,
        country: lead.country,
        industry: lead.industry,
        services: lead.services,
        score: lead.score,
        priority: lead.priority,
        status: lead.status,
        budget: lead.budget,
        timeline: lead.timeline,
        challenge: lead.mainChallenge,
        attribution: lead.attribution,
        notes: lead.notes,
        callBookedAt: lead.callBookedAt,
      })),
    },
    { status: 200 }
  );
}

/**
 * Protected Admin Endpoint to Advance Pipeline Stage
 * Stages: "New" | "Qualified" | "Call Booked" | "Proposal Sent" | "Won" | "Lost"
 */
export async function PATCH(request: Request) {
  const adminApiKey = process.env.ADMIN_API_KEY;

  if (!adminApiKey) {
    return NextResponse.json(
      { error: "Administrative lead API is disabled. Configure ADMIN_API_KEY in environment variables." },
      { status: 403 }
    );
  }

  const authHeader = request.headers.get("authorization");
  const token = authHeader?.replace(/^Bearer\s+/i, "").trim();

  if (!token || token !== adminApiKey) {
    return NextResponse.json(
      { error: "Unauthorized access. Valid administrative bearer token required." },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { referenceId, status, note, callBookedAt } = body;

    if (!referenceId || typeof referenceId !== "string") {
      return NextResponse.json(
        { error: "Missing required referenceId field." },
        { status: 422 }
      );
    }

    const validStages: PipelineStage[] = [
      "New",
      "Qualified",
      "Call Booked",
      "Proposal Sent",
      "Won",
      "Lost",
    ];

    if (!status || !validStages.includes(status as PipelineStage)) {
      return NextResponse.json(
        {
          error: `Invalid status. Valid stages are: ${validStages.join(", ")}`,
        },
        { status: 422 }
      );
    }

    const result = updateLeadStatus(referenceId, status as PipelineStage, {
      note,
      callBookedAt,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || "Lead update failed." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: `Lead ${referenceId} updated to stage ${status}.`,
        lead: result.lead,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    return NextResponse.json(
      {
        error: err instanceof Error ? err.message : "Failed to parse update payload.",
      },
      { status: 500 }
    );
  }
}
