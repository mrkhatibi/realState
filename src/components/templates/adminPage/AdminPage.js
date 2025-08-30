import PostsCard from "../myposts/PostsCard"

async function AdminPage({posts , UserRole , id}) {
  return (
    <div >
        {posts.map(post=>(
          <div style={{marginTop : "30px"}}>
            <PostsCard item={post} UserRole={UserRole} id={id}/>

          </div>
        ))}
    </div>
  )
}

export default AdminPage