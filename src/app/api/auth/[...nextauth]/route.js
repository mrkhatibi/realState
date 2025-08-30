import User from "@/models/user";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

 export const nextOption = {
  session: { strategy: "jwt" },
  providers: [
   CredentialsProvider ({
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در اتصال  به دیتابیس به وجود امده است");
        }
        if (!email || !password) {
          throw new Error("لطفا اطلاعات خود را وارد کنید");
        }
        const exitingUser = await User.findOne({ email });
        if (!exitingUser) {
          throw new Error("با این ایمیل حساب کاربری وجود ندارد");
        }
        const isValid = await verifyPassword(password, exitingUser.password);
        if (!isValid) {
          throw new Error("رمز اشتباه است");
        }
        return { email };  
      },
    }),
    
  ],
};

const handler = NextAuth(nextOption)

export {handler as GET , handler as POST}
