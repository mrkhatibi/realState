"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./SideBar.module.css";
import { useState } from "react";
function SideBar() {
  const router = useRouter();
  const [deleteFilterButton, setDeleteFilterButton] = useState(false);
  const categories = [
    { value: "apartment", title: "آپارتمان" },
    { value: "villa", title: "ویلا" },
    { value: "shop", title: "مغازه" },
    { value: "office", title: "اداری" },
  ];
  const cities = [
    "تهران",
    "مشهد",
    "اصفهان",
    "شیراز",
    "تبریز",
    "اهواز",
    "رشت",
    "ساری",
  ];
  const searchParams = useSearchParams();
  const categoryHandler = (value) => {
    setDeleteFilterButton(true);
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", value);
    router.push(`posts/?${params.toString()}`);
  };
  const pathname = usePathname();
  const deleteFilterander = () => {
    setDeleteFilterButton(false);

    router.push(pathname);
  };

  const cityHandler = (value) => {
    setDeleteFilterButton(true);
    const params = new URLSearchParams(searchParams.toString());
    params.set("city", value);
    router.push(`posts/?${params.toString()}`);
  };
  return (
    <div className={styles.sidebar}>
      {deleteFilterButton ? (
        <h3
          className={styles.deleteFilter}
          onClick={deleteFilterander}
        >
          حذف فیلتر ها
        </h3>
      ) : null}
      <h3>دسته بندی ها :</h3>
      <ul>
        {categories.map((category) => (
          <li
            key={category.value}
            onClick={() => categoryHandler(category.value)}
          >
            {category.title}
          </li>
        ))}
      </ul>
      <h3>شهر ها :</h3>
      <ul>
        {cities.map((city) => (
          <li key={city} onClick={() => cityHandler(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
