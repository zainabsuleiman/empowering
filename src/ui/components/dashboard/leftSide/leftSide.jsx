import "./leftSide.css"
// import Logo from "../../logo/logo"
import woman from "../../../resources/woman.jpg"
import { MdDashboard } from "react-icons/md"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { FcCalendar,FcViewDetails } from "react-icons/fc"
import { IoMdSettings,IoMdNotifications } from "react-icons/io"

function LeftSide(props) {

  return (

    <div className="leftSide" >
      <div id="leftHeader">
        {/* <span id="logo"><Logo /></span> */}
        <span id="img"><img src={woman} alt="" /></span>
        <h1>Kishan Sheth</h1>
        <h2>Investor</h2>
      </div>
      <div id="leftMain">
        <ul>
          <li><MdDashboard/> Dashboard</li>
          <li><AiOutlineFundProjectionScreen/>Projects</li>
          <li><IoMdNotifications/>Notifications</li>
          <li><FcCalendar/>Calendar</li>
          <li><FcViewDetails/>Overview</li>
          <li><IoMdSettings/>Settings</li>
        </ul>
      </div>
    </div>
  )
}

export default LeftSide