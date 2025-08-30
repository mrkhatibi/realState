import { getServerSession } from "next-auth"
import SignIn from "src/components/templates/signIn/signIn"
import { nextOption } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

export const metadata = {
  title: "  ورود || Mrkhatibi",
};
async function SignInPage() {
  const session = await getServerSession(nextOption)
  if (session) {
    redirect("/")
  }
  return (
    <SignIn />
  )
}

export default SignInPage