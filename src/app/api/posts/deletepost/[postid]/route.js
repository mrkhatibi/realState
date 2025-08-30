import Posts from "@/models/Posts";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    console.log("connected DB");
  } catch (error) {
    return NextResponse.json({ message: "اتصال برقرار نشد" }, { status: 500 });
  }

  const { postid } = params;
  const post = await Posts.findByIdAndDelete(postid);
  return NextResponse.json(
    { message: "پست با موفقیت  حذف گردید" },
    { status: 200 }
  );
}
