"use client";
import Menu from "../Menu";

const Header = (props) => {
  return (
    <>Header
    <Menu {...props} />
    {props.children}
    </>
  )
}

export default Header