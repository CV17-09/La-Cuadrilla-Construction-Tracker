import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const material = await prisma.material.create({
      data: {
        name: body.name,
        costPerUnit: Number(body.costPerUnit),
        minThreshold: Number(body.minThreshold),
        qrCode: body.qrCode,
      },
    });

    return NextResponse.json(material, { status: 201 });
  } catch (error) {
    console.error("Failed to create material:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to create material",
      },
      { status: 500 }
    );
  }
}