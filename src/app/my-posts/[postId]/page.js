import PostDetail from "@/components/templates/postDetails/PostDetail";
import Posts from "@/models/Posts";
import User from "@/models/user";
import connectDB from "@/utils/connectDB";

function PostId({ params }) {
  const { postId } = params;
  return (
    <div>
      <PostDetail postId={postId} />
    </div>
  );
}

export default PostId;


export const generateMetadata =async ({ params  : {postId}}) => {
  await connectDB()
  const post = await Posts.findById(postId)
  const userid = post.userId
  const user = await User.findById(userid)
  return {
    title : post.title ,
    description : post.content ,
    authors : [{
      name : user?.email
    }] ,
    other : {
      realstate : post?.realstate
    },
  
  }
}
