import Layout from "@/layout/Layout";
import "./globals.css";
import { yekanbakh } from "@/utils/fonts";
import NextAuthProvider from "@/providers/nextAuthProvider"
import connectDB from "@/utils/connectDB";


export const metadata = {
  title: " خرید و اجاره املاک || Mrkhatibi",
  description: "سامانه خرید و اجاره املاک",
};

export default async function RootLayout({ children }) {
  await connectDB()
  return (
    <html lang="fa" dir="rtl">
      <body className={yekanbakh.className}>
    <NextAuthProvider>

          <Layout>
            <div>{children}</div>
          </Layout>
    </NextAuthProvider>
      
      </body>
    </html>
  );
}
