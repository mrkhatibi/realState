import styles from "./addpostpage.module.css";
function AddCategory({setCategory , category}) {
  return (
    <div className={styles.radiosdiv}>
      <div className={styles.radiosdiv1}>
        <input
          className={styles.radioinputs}
          type="radio"
          value="villa"
          name="category"
          checked = {category === "villa"}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label htmlFor="villa">ویلا</label>
      </div>
      <div className={styles.radiosdiv1}>
        {" "}
        <input
          className={styles.radioinputs}
          type="radio"
          value="apartment"
          name="category"
          checked = {category === "apartment"}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label htmlFor="apartment">آپارتمان</label>
      </div>
      <div className={styles.radiosdiv1}>
        {" "}
        <input
          className={styles.radioinputs}
          type="radio"
          value="shop"
          name="category"
          checked = {category === "shop"}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label htmlFor="shop">مغازه</label>
      </div>
      <div className={styles.radiosdiv1}>
        <input
          className={styles.radioinputs}
          type="radio"
          value="office"
          name="category"
          checked = {category === "office"}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label htmlFor="office">اداری</label>
      </div>
    </div>
  );
}

export default AddCategory;
