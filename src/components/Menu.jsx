import Logo from "./Logo"

const Menu = (props) => {
  return (
    <>
    <div> 
       Menu {props.name} {props.age} {props.age ? "Male":"female"}
    </div>
    <Logo/>
    </>
  )
}

export default Menu