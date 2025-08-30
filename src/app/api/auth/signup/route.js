import User from "@/models/user";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
 
  try {
    await connectDB();
   
   console.log("connected to DB")
  } catch (error) {
    console.log(error);
   return NextResponse.json({ message: "متاسفانه مشکلی پیش آمده" }, { status: 500 });
  }
    const { email, password } = await req.json();
  if (!email || !password) {
   return NextResponse.json({ message: "لطفا اطلاعات صحیح وارد کنید" }, { status: 422 });
  }
  const exitingUser = await User.findOne({email})
  if (exitingUser) {
   return NextResponse.json({ message: "شما قبلا با این ایمیل ثبت نام کرده اید" }, { status: 422 });
  }
  const hashedPassword = await hashPassword(password)
  const newUser = await User.create({email : email , password : hashedPassword})
  console.log(newUser)
 return NextResponse.json({message : "ثبت نام با موفقیت انجام شد" } , {status : 201} , {data : email})
  
}
