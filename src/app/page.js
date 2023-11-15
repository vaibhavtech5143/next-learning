import Header from "@/components/Header/Header";


export default function Home() {
  return (
<div >
  <h2>Next Js Learning</h2>
  <Header name={"Vaibhav Home"} age={23} isMail={true}>
  <p>A Message From Home</p>
  <div>
  <h1>Children</h1>
  </div>
  </Header>
</div>
  )
} 
