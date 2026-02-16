import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return NextResponse.json(null, { headers: corsHeaders });
}

export async function GET() {
  try {
    const status = await prisma.status.findFirst({
      orderBy: { updatedAt: "desc" },
    });

    if (!status) {
      return NextResponse.json(
        { title: "Out of Office", updatedAt: null },
        { status: 200, headers: corsHeaders }
      );
    }

    return NextResponse.json({
      title: status.title,
      updatedAt: status.updatedAt,
    }, { headers: corsHeaders });
  } catch (error) {
    console.error("Failed to fetch status:", error);
    return NextResponse.json(
      { error: "Failed to fetch status" },
      { status: 500, headers: corsHeaders }
    );
  }
}
