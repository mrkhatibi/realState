import Posts from "@/models/Posts";
import User from "@/models/user";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
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
  } = body
  console.log(body)
  const session = await getServerSession(req)
  console.log(session)
  if (!session) {
   return NextResponse.json({status : 404} , {message : "لطفا ابتدا وارد حساب کاربری خود شوید"})
  }
  const user = await User.findOne({email : session.user.email})
  if (!user) {
   return NextResponse.json({message : "کاربر نامعتبر ، لطفا دوباره وارد شوید"}, {status : 422})
  }
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
   return NextResponse.json({message : "لطفا اطلاعات را کامل وارد کنید"},{status : 422})
  }
  const newPost = await Posts.create({title,
    content,
    address,
    phone,
    price : +price,
    realstate,
    category,
    amenities,
    rules,
    constractionDate , 
    userId : new Types.ObjectId(user._id)
})
    await newPost.save()
   return NextResponse.json({message : "پست با موفقیت ثبت گردید✅"},{status : 201})
  } catch (error) {
    return NextResponse.json(
      { status: "500" },
      { message: "اتصال برقرار نشد🥲" }
    );
  }
  
}
