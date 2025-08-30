"use client";
import { signOut, useSession } from "next-auth/react";
import { BsPersonCircle } from "react-icons/bs";
import styles from "@/modules/SideBar.module.css";
import Link from "next/link";
function SideBar({ user }) {
  const { data } = useSession();
  const logoutHandler = () => {
    signOut();
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <BsPersonCircle size={40} />
        {user.role === "ADMIN" ? <h2>Admin</h2> : null}
        <h3>{data?.user.email}</h3>
        <Link href={"/dashboard"}>
          <h3>حساب کاربری</h3>
        </Link>
        <Link href={"/dashboard/my-posts"}>
          <h3>آگهی های من</h3>
        </Link>
        <Link href={"/dashboard/add"}>
          <h3>ثبت آگهی</h3>
        </Link>
        {user.role === "ADMIN" ? (
          <Link href={"/dashboard/Admin"}>
            <h3>آگهی های در انتظار تایید</h3>
          </Link>
        ) : null}

        <h3 onClick={() => logoutHandler()}>خروج</h3>
      </div>
    </div>
  );
}

export default SideBar;
