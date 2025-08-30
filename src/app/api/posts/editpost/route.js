import Posts from "@/models/Posts";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  try {
    await connectDB();
    console.log("connected to DB");
  } catch (error) {
    return NextResponse.json({ message: "اتصال برقرار نشد" }, { status: 500 });
  }
  const body = await req.json();
  const {
    title,
    content,
    address,
    phone,
    price,
    realstate,
    category,
    amenities,
    rules,
    constractionDate,
  } = body;
  const { _id: id } = body;
  if (
    !title ||
    !content ||
    !address ||
    !phone ||
    !price ||
    !realstate ||
    !category ||
    !constractionDate
  ) {
    return NextResponse.json(
      { message: "لطفا اطلاعات را کامل وارد کنید" },
      { status: 422 }
    );
  }
  const post = await Posts.findByIdAndUpdate(id, {
    title,
    content,
    address,
    phone,
    price,
    realstate,
    category,
    amenities,
    rules,
    constractionDate,
  });
  if (!post) {
    return NextResponse.json(
      { message: "مشکلی پیش آمده . دوباره امتحان کنید" },
      { status: 404 }
    );
  }

  return NextResponse.json({ message: "ویرایش انجام شد" }, { status: 201 });
}
