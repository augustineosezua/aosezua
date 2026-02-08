import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const status = await prisma.status.findFirst({
      orderBy: { updatedAt: "desc" },
    });

    if (!status) {
      return NextResponse.json(
        { title: "Out of Office", updatedAt: null },
        { status: 200 }
      );
    }

    return NextResponse.json({
      title: status.title,
      updatedAt: status.updatedAt,
    });
  } catch (error) {
    console.error("Failed to fetch status:", error);
    return NextResponse.json(
      { error: "Failed to fetch status" },
      { status: 500 }
    );
  }
}
