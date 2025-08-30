"use client"
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import styles from "./Counter.module.css"
const SingleCounter = ({ title, count }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(false); // ریست
          setTimeout(() => setInView(true), 50); // شروع شمارش
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className={styles.counterdiv}>
      <h3>{title}</h3>
      <div className={styles.counter} >
        {inView ? <CountUp key={inView} end={count} duration={2} /> : 0}
      </div>
    </div>
  );
};

export default function Counter() {
  const counter = [
    { title: "تعداد کاربران سایت تا این لحظه", count: 12543 },
    { title: "تعداد آگهی های ثبت شده", count: 13026 },
    { title: "معاملات خرید و فروش موفق توسط ما", count: 3452 },
    { title: "معاملات اجاره و رهن موفق توسط ما", count: 4970 },
  ];

  return (
    <div  className={styles.counterContainer}>
      {counter.map((item, idx) => (
        <SingleCounter key={idx} title={item.title} count={item.count} />
      ))}
    </div>
  );
}
