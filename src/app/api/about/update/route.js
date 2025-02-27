import connectToDB from "@/database";
import { NextResponse } from "next/server";
import About from "@/models/About";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();
    const extractData = await req.json();

    const {
      _id,
      aboutme,
      noofprojects,
      yearofexperience,
      noofclients,
      skills,
    } = extractData;

    const updateData = await About.findByIdAndUpdate(
      {
        _id: _id,
      },
      {
        aboutme,
        noofprojects,
        yearofexperience,
        noofclients,
        skills,
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
