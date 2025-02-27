import Home from "@/models/Home";
import connectToDB from "@/database";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();
    const extractData = req.json();
    const { _id, heading, summary } = extractData;

    const updateData = await Home.findByIdAndUpdate(
      {
        _id: _id,
      },
      {
        heading,
        summary,
      },
      {
        new: true,
      }
    );

    if (updateData) {
      return NextResponse.json({
        success: true,
        message: "Data updated successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to update data",
      });
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      message: "Failed to update data",
    });
  }
}
