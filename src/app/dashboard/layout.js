import SideBar from "@/modules/SideBar";
import styles from "./layout.module.css";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { nextOption } from "../api/auth/[...nextauth]/route";
import User from "@/models/user";
import { redirect } from "next/navigation";

export const metadata = {
  title: "  پنل کاربری|| Mrkhatibi",
};
async function layout({ children }) {
  await connectDB();
  const session = await getServerSession(nextOption);
  if (!session) {
    redirect("/");
  }
  const [user] = await User.find({ email: session.user.email });
  const data = JSON.parse(JSON.stringify(user));
  return (
    <div className={styles.sidebar}>
      <div>
        <SideBar user={data} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default layout;
