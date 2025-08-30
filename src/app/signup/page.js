
import { getServerSession } from "next-auth"
import SignUp from "src/components/templates/signUp/SignUp"
import { nextOption } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

export const metadata = {
  title: "  ایجاد حساب کاربری || Mrkhatibi",
};

async function Signup() {
  const session = await getServerSession(nextOption)
  if (session){
    redirect("/")
  }
  return (
    <SignUp/>
  )
}

export default Signup