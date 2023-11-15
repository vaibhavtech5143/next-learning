"use client"
import { useParams } from "next/navigation";

const ProfileId = () => {
    const params = useParams();
    console.log(params);
  return (
    <div>Inside ProfileId {params.id}</div>
  )
}

export default ProfileId