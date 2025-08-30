import { FaHouseChimney } from "react-icons/fa6";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaShopLock } from "react-icons/fa6";
import { MdOutlineApartment } from "react-icons/md";
import styles from "./PostCard.module.css";

function Icons({item , id}) {
  return (
    <div>
              {item.category === "villa" ? (
                <div className={styles.icondiv}>
                  <FaHouseChimney
                    size={"30px"}
                    color={id && id === item.userId ? "green" : "blue"}
                  />
                  {id && id === item.userId ? <h4>آگهی شما</h4> : null}
                  {item.published === false ? <h4>در انتظار تایید</h4> : null}
                </div>
              ) : null}
              {item.category === "office" ? (
                <div className={styles.icondiv}>
                  <HiBuildingOffice2
                    size={"30px"}
                    color={id && id === item.userId ? "green" : "blue"}
                  />
                  {id && id === item.userId ? <h4>آگهی شما</h4> : null}
                  {item.published === false ? <h4>در انتظار تایید</h4> : null}
                </div>
              ) : null}
              {item.category === "shop" ? (
                <div className={styles.icondiv}>
                  <FaShopLock
                    size={"30px"}
                    color={id && id === item.userId ? "green" : "blue"}
                  />
                  {id && id === item.userId ? <h4>آگهی شما</h4> : null}
                  {item.published === false ? <h4>در انتظار تایید</h4> : null}
                </div>
              ) : null}
              {item.category === "apartment" ? (
                <div className={styles.icondiv}>
                  <MdOutlineApartment
                    size={"30px"}
                    color={id && id === item.userId ? "green" : "blue"}
                  />
                  {id && id === item.userId ? <h4>آگهی شما</h4> : null}
                  {item.published === false ? <h4>در انتظار تایید</h4> : null}
                </div>
              ) : null}
            </div>
  )
}

export default Icons