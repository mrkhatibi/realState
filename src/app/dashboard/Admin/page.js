import { nextOption } from "@/app/api/auth/[...nextauth]/route"
import AdminPage from "@/components/templates/adminPage/AdminPage"
import Posts from "@/models/Posts"
import User from "@/models/user"
import connectDB from "@/utils/connectDB"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
export const metadata = {
  title: "  ادمین || Mrkhatibi",
};
async function Admin() {
  await connectDB()
  const session = await getServerSession(nextOption)
  if(!session){
    redirect("/dashboard")
  }
  const [user] = await User.find({email : session.user.email})
  if (user.role !== "ADMIN") {
    redirect("/dashboard")
  }
  const id = JSON.parse(JSON.stringify(user._id))
  const UserRole = JSON.parse(JSON.stringify(user.role))
  const posts = await Posts.find({published : false})
  const data = JSON.parse(JSON.stringify(posts))
  return (
    <div>
      <AdminPage posts={data} UserRole={UserRole} id={id}/>
    </div>
  )
}

export default Admin