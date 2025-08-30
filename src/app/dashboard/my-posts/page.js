import { nextOption } from "@/app/api/auth/[...nextauth]/route";
import PostsCard from "@/components/templates/myposts/PostsCard";
import User from "@/models/user";
import { getServerSession } from "next-auth";
import styles from "./mypostspage.module.css";
import connectDB from "@/utils/connectDB";
async function MyPosts() {
  await connectDB();
  const session = await getServerSession(nextOption);

  const [user] = await User.aggregate([
    {
      $match: { email: session.user.email },
    },
    {
      $lookup: {
        from: "posts",
        foreignField: "userId",
        localField: "_id",
        as: "posts",
      },
    },
  ]);
  let id = "";
  if (session) {
    id = user._id.toString();
  }
  const data = JSON.parse(JSON.stringify(user));

  return (
    <div>
      {data ? (
        <div className={styles.container}>
          {data.posts.map((item) => (
            <div key={item._id}>
              <PostsCard item={item} id={id} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h3>هنوز پستی بارگذاری نکرده اید</h3>
        </div>
      )}
    </div>
  );
}

export default MyPosts;
