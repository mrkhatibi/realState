import { getServerSession } from "next-auth"
import { nextOption } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import DashboardPage from "@/components/templates/dashboard/DashboardPage"
async function Dashboard() {
    const session= await getServerSession(nextOption)
    if (!session) redirect('/')
  return (
    <div><DashboardPage /></div>
  )
}

export default Dashboard