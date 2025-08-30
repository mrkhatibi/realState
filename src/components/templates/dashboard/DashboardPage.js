

import { toPersianDate } from "@/utils/toPersianDate"
import { useSession } from "next-auth/react"
import styles from "./DashboardPage.module.css"
import User from "@/models/user"
import connectDB from "@/utils/connectDB"
import { getServerSession } from "next-auth"
import { nextOption } from "@/app/api/auth/[...nextauth]/route"
async function DashboardPage() {
  await connectDB()
  const session =await getServerSession(nextOption)
  const user = await User.findOne({email : session.user.email})
  if (!session) {
    return <h3>Loading</h3>
  }
  return (
    <div>
      <h2>سلام 👋</h2><h3>از طریق دکمه ثبت آگهی میتوانید آگهی های خود را ثبت کنید.</h3>
      <h3 className={styles.date}>تاریخ ثبت نام : {toPersianDate(user.createdAt)}</h3>
    </div>
  )
}

export default DashboardPage