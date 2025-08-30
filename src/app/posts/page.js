import PostsPage from "@/components/templates/postsPage/PostsPage";
import SideBar from "@/components/templates/postsPage/SideBar";
import Posts from "@/models/Posts";
import styles from "./postspage.module.css";
import connectDB from "@/utils/connectDB";
import toast, { Toaster } from "react-hot-toast";
export const metadata = {
  title: "  آگهی ها || Mrkhatibi",
};
async function Postss({ searchParams }) {
  try {
    await connectDB();
  } catch (error) {
    return toast.error("خطا در دریافت اطلاعات");
  }
  let posts = await Posts.find({ published: true })
    .sort({ createdAt: -1 })
    .lean();
  if (searchParams.category && !searchParams.city) {
    posts = posts.filter((post) => post.category === searchParams.category);
  } else if (!searchParams.category && searchParams.city) {
    posts = posts.filter((post) => post.address.includes(searchParams.city));
  } else if (searchParams.category && searchParams.city) {
    const filteredByCategory = posts.filter(
      (post) => post.category === searchParams.category
    );
    posts = filteredByCategory.filter((item) =>
      item.address.includes(searchParams.city)
    );
  }
  const data = JSON.parse(JSON.stringify(posts));

  return (
    <div className={styles.container}>
      <Toaster />
      <div className={styles.postspage}>
        <PostsPage posts={data} />
      </div>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
    </div>
  );
}

export default Postss;
