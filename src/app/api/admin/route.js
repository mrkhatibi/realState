import Posts from "@/models/Posts";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { id } = body;
    await Posts.findByIdAndUpdate(id, { published: true });
   return NextResponse.json({ message: "پست منتشر گردید" }, { status: 200 });
  } catch (error) {
   return NextResponse.json({ message: " خطا " }, { status: 500 });
  }
}
