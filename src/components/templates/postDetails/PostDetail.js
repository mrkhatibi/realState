import Posts from "@/models/Posts";
import connectDB from "@/utils/connectDB";
import { formatToPersianRial } from "@/utils/formatToPersianRial";
import { FaHouseChimney, FaMapLocationDot, FaShopLock } from "react-icons/fa6";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineApartment } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import styles from "./postDetails.module.css";


async function PostDetail({ postId }) {
  await connectDB();
  const data = await Posts.findById(postId);
  if (!data) return <h3>پیدا نشد</h3>;
  let faCategory = "";
  if (data.category === "apartment") {
    faCategory = "آپارتمان";
  } else if (data.category === "villa") {
    faCategory = "ویلایی";
  } else if (data.category === "shop") {
    faCategory = "مغازه";
  } else {
    faCategory = "اداری";
  }
  return (
    <div className={styles.allcontainer}>
      <h2>{data.title}</h2>
      <h3 className={styles.address}>
        <FaMapLocationDot size={"20px"} color="gray" />
        {data.address}
      </h3>
      <hr />
      <h3>توضیحات :</h3>
      <p className={styles.content}>{data.content}</p>
      <hr />
      <h3>قوانین :</h3>
      <ul>
        {data.rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
      <hr />
      <h3>امکانات :</h3>
      <ul>
        {data.amenities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr />
      <div className={styles.downSide}>
        <div className={styles.rDownSide}>
          <VscAccount size={"60px"} color="blue" />
          <h3>آگهی کننده : {data.realstate}</h3>
          <h3>شماره تماس : {data.phone}</h3>
        </div>
        <div className={styles.lDownSide}>
          <div>
            {data.category === "villa" ? (
              <FaHouseChimney size={"60px"} color="blue" />
            ) : null}
            {data.category === "office" ? (
              <HiBuildingOffice2 size={"60px"} color="blue" />
            ) : null}
            {data.category === "shop" ? (
              <FaShopLock size={"60px"} color="blue" />
            ) : null}
            {data.category === "apartment" ? (
              <MdOutlineApartment size={"60px"} color="blue" />
            ) : null}
          </div>
          <h3>دسته بندی : {faCategory}</h3>
          <h3> قیمت: {formatToPersianRial(data.price)}</h3>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
