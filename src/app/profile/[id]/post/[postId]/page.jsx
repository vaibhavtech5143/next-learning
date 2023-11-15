"use client"
import { useParams } from "next/navigation";
const PostId = () => {
    const params = useParams();

    console.log("params",params.id);
    console.log("post id",params.postId);
  return (
    <div>PostId{params.id}</div>
  )
}

export default PostId