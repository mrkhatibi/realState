"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SignUp.module.css"
import Link from "next/link";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
const router = useRouter()
const submitHandler =async (e)=> {
  e.preventDefault()
  if (password !== passwordCheck){
   return toast.error("رمز و تکرار رمز برابر نیست")
  }
  const res = await fetch("/api/auth/signup" , {
    method : "POST" ,
    body : JSON.stringify({email , password}) ,
    headers : {
      "Content-Type" : "application/json"
    }
  })
  const data = await res.json()
  if (res.status === 201){
    setTimeout(() => {
      router.replace("/signin")
    }, 2000);
    toast.success(data.message)
  } else {
    toast.error(data.message)
    setEmail("")
    setPassword("")
    setPasswordCheck("")
  }
}
  return (
    <div className={styles.container}>
      <h2>ثبت نام</h2>
      <Toaster/>
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
        <input
          type="password"
          placeholder="تکرار رمز عبور"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
        <button onClick={submitHandler}>تایید</button>
        <h3>حساب کاربری دارید ؟ <Link href={"/signin"}>ورود</Link></h3>
      </form>
    </div>
  );
}

export default SignUp;
