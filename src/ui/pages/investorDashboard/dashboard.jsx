import Earnings from "../../components/dashboard/earnings/earnings";
import {Header} from "../../components/dashboard/header/header";
import LeftSide from "../../components/dashboard/leftSide/leftSide";
import ProjectCard from "../../components/dashboard/Rank/projectCard";
import "./dashboard.css"

import { useState } from "react";


function Dashboard(props) {

  const [value,setValue]= useState(1)
  const [visiblee,setVisible] = useState("leftSide")

  return (
    <div id="dashContainer">

        <div className={visiblee}>
            <LeftSide/>
        </div>
        <div id="dashMain">
            <Header clickHandler={()=>{
              setValue(()=>{

                if (value ===1){
                  setVisible("leftSideDiv")
                  return 0
                }else{
                  setVisible("hide")
                  return 1
                } 
              } ) 
            }}/>
            <Earnings />
            <ProjectCard />
        </div>

    </div>
  )
}

export default Dashboard