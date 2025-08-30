import Image from "next/image";
import image1 from "@/public/images/1.jpg";
import image2 from "@/public/images/2.jpg";
import image3 from "@/public/images/3.webp";
import image4 from "@/public/images/4.jpg";
import styles from "./mainPage.module.css";
import { FaCity } from "react-icons/fa6";
import Counter from "@/modules/Counter";
import Link from "next/link";

function MainPage() {
  const services = ["رهن", "اجاره", "فروش", "خرید"];
  const categories = [
    { image: image1, name: "مغازه" , value : "shop"},
    { image: image2, name: "اداری" , value : "office"},
    { image: image3, name: "ویلایی" , value : "villa"},
    { image: image4, name: "آپارتمان" , value : "apartment"},
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

 
  return (
    <div>
      <h1 className={styles.title}>سامانه خرید و اجاره املاک</h1>
      <div>
        <ul className={styles.services}>
          {services.map((service) => (
            <li className={styles.service} key={service}>
              {service}
            </li>
          ))}
        </ul>
      </div>
      <div >
        <h2 className={styles.cityTitle}>انواع کاربری</h2>

        <div className={styles.categories}>

        {categories.map((category) => (
          <div className={styles.category} key={category.name}>
            <Link href={`http://localhost:3000/posts?category=${category.value}`}>
            <Image
              src={category.image}
              alt={category.name}
              width={200}
              height={150}
              className={styles.image}
            />
            <h3>{category.name}</h3>
          </Link>
          </div>
        ))}
        </div>
      </div>
      <div className={styles.cityContainer}>
        <h2 className={styles.cityTitle}>شهر های پربازدید</h2>
        <div className={styles.cities}>
          {cities.map((city) => (
            <Link href={`http://localhost:3000/posts?city=${city}`}>
            <li className={styles.city} key={city}>
              <FaCity /> 
              <h3> {city}</h3>
            </li>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h2 className={styles.cityTitle}>گزارشات</h2>
        <Counter />
      </div>
    </div>
  );
}

export default MainPage;
