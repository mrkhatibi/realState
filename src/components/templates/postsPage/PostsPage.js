import Loader from "@/modules/Loader"
import PostsCard from "../myposts/PostsCard"
import styles from "./PostsPage.module.css"
import { getServerSession } from "next-auth"
import { nextOption } from "@/app/api/auth/[...nextauth]/route"
import connectDB from "@/utils/connectDB"
import User from "@/models/user"


async function PostsPage({posts}) {
  await connectDB()
  const session = await getServerSession(nextOption)
 let user = []
 let id = ""
 let UserRole = ""
  if (session){
     user = await User.findOne({email : session.user.email})
     id = user._id.toString()
   UserRole = JSON.parse(JSON.stringify(user.role))
  }
 if (posts.length === 0){
  return (
    <h2>پست یافت نشد</h2>
  )
 }
  return (
    <div className={styles.container}>
      {posts.map(post=> (
        <PostsCard item={post} id={id} UserRole={UserRole}/>
      ))}
    </div>
  )
}

export default PostsPage