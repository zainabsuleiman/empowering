import "./header.css"
import { BsSearch,BsBookmark } from "react-icons/bs"
import { FiMenu } from "react-icons/fi"
import { HiOutlineUserCircle } from "react-icons/hi"
function Header() {
  return (
    <div id="headerContainer">
        <span><FiMenu/></span>
        <ul>    
            
            <li><BsSearch/></li>
            <li><BsBookmark/></li>
            <li><HiOutlineUserCircle size="1.5em"/></li>
        </ul>
    </div>
  )
}

export default Header