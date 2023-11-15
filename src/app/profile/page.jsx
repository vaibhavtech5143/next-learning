"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
const ProfilePage = () => {
  const router = useRouter();
  console.log("router",router);
  return (

    <>
    <div>ProfilePage</div>
<div>
  <h2>List Of Profiles</h2>
  <ul>
    {/* <li onClick={()=>router.push("/profile/1")} >User 1</li>
    <li onClick={()=>router.push("/profile/2")} >User 2</li>
    <li onClick={()=>router.push("/profile/3")} >User 3</li> */}
    <Link href={"/profile/1"}>User 1</Link>
    <br/>
    <Link href={"/profile/2"} >User 2</Link>
    <br/>
    <Link href={"/profile/3"}>User 3</Link>
  </ul>
</div>
    </>
  )
}

export default ProfilePage