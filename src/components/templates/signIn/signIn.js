"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SignIn.module.css";
import Link from "next/link";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    console.log(res);
    if (res.error) {
     return toast.error(res.error);
    } else {
      setTimeout(() => {
        router.replace("/")
      }, 2000);
      toast.success("ورود  با موفقیت انجام شد");
    }
  };
  return (
    <div className={styles.container}>
      <h2>ورود</h2>
      <Toaster />
      <form className={styles.form}>
        <input
          type="text"
          placeholder="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="رمز"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={submitHandler}>تایید</button>
        <h3>
          حساب کاربری ندارید ؟ <Link href={"/signup"}>ثبت نام</Link>
        </h3>
      </form>
    </div>
  );
}

export default SignIn;
