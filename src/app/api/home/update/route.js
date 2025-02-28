import Home from "@/models/Home";
import connectToDB from "@/database";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();
    const extractData = await req.json();

    const { heading, summary } = extractData;

    const homeData = await Home.find({});
    const updateData = await Home.findByIdAndUpdate(
      {
        _id: homeData[0]._id,
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
