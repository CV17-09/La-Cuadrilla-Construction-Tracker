import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const material = await prisma.material.create({
      data: {
        name: body.name,
        categoryId: body.categoryId,
        supplierId: body.supplierId,
        unitId: Number(body.unitId),
        costPerUnit: Number(body.costPerUnit),
        minThreshold: Number(body.minThreshold),
        qrCode: body.qrCode,
      },
    });

    return NextResponse.json(material);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Failed to create material" },
      { status: 500 }
    );
  }
}