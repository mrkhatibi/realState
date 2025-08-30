import AddPostPage from "@/components/templates/AddPost/AddPostPage"
import styles from "./addpage.module.css"
function AddPost() {
  return (
    <div>
      <h3 className={styles.title}>اضافه کردن پست</h3>
        <AddPostPage />
    </div>
  )
}

export default AddPost