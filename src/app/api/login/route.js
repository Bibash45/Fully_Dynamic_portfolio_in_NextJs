import connectToDB from "@/database";
import User from "@/models/User";
import { compare, hash } from "bcryptjs";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const { username, password } = await req.json();
    const checkUser = await User.findOne({ username });
    if (!checkUser) {
      return NextResponse.json({
        success: false,
        message: "Username is not present, please try again",
      });
    }
    const hashPassword = await hash(checkUser.password, 12);
    const comparePassword = await compare(password, hashPassword);
    if (!comparePassword) {
      return NextResponse.json({
        success: false,
        message: "Password wrong!!",
      });
    }
    return NextResponse.json({
      success: true,
      message: "Login Successfull!!",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong . please try again",
    });
  }
}
