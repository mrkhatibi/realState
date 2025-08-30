"use client";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";
import { MdAccountBox } from "react-icons/md";
import styles from "@/layout/layout.module.css";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
function Header() {
  const [userStatus, setUserStatus] = useState(false);
  const { status } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") {
      setUserStatus(false);
    } else if (status === "authenticated") {
      setUserStatus(true);
    }
  }, [status]);
  return (
    <div className={styles.header}>
      <div className={styles.rsideheader}>
        <div>
          <Link href={"/"}>
            <h3>صفحه اصلی</h3>
          </Link>
        </div>
        <div>
          <Link href={"/posts"}>
            <h3>آگهی ها</h3>
          </Link>
        </div>
      </div>
      <div className={styles.lsideheader}>
        {userStatus ? (
          <Link href={"/dashboard"}>
            <Stack spacing={2} direction="row">
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  fontFamily: "var(--font-yekanbakh)",
                }}
              >
                <MdAccountBox size={"30px"}/>
              </Button>
            </Stack>
          </Link>
        ) : (
          <Link href={"/signup"}>
            <Stack spacing={2} direction="row">
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  fontFamily: "var(--font-yekanbakh)",
                }}
              >
                ورود/ثبت نام
              </Button>
            </Stack>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
