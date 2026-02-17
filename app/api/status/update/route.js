import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const runtime = 'nodejs';
export const preferredRegion = 'iad1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-api-key, x-api-idCode',
};

export async function OPTIONS() {
  return NextResponse.json(null, { headers: corsHeaders });
}

export async function POST(request) {
  try {
    const userIdCode = request.headers.get("x-api-idCode");
    const apiKey = request.headers.get("x-api-key");

    if (!apiKey || apiKey !== process.env.API_SECRET_KEY) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401, headers: corsHeaders }
      );
    }

    const existingStatus = await prisma.status.findUnique({
      where: { userCode: userIdCode },
    });

    if (!userIdCode || !existingStatus || userIdCode !== existingStatus?.userCode) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401, headers: corsHeaders }
      );
    }

    const body = await request.json();
    const { title } = body;

    if (!title || typeof title !== "string" || title.trim().length === 0) {
      return NextResponse.json(
        { error: "Title is required and must be a non-empty string" },
        { status: 400, headers: corsHeaders }
      );
    }

    const status = await prisma.status.update({
      where: { userCode: userIdCode },
      data: { title: title.trim() }
    });

    return NextResponse.json({
      title: status.title,
      updatedAt: status.updatedAt,
    }, { headers: corsHeaders });
  } catch (error) {
    console.error("Failed to update status:", error);
    return NextResponse.json(
      { error: "Failed to update status" },
      { status: 500, headers: corsHeaders }
    );
  }
}
