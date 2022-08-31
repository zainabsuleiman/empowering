import Header from "../../components/dashboard/header/header";
import LeftSide from "../../components/dashboard/leftSide/leftSide";
import "./dashboard.css"

function Dashboard() {
  return (
    <div id="dashContainer">

        <div>
            <LeftSide />
        </div>
        <div id="dashMain">
            <Header />
        </div>

    </div>
  )
}

export default Dashboard