
// import { useState } from "react";
// import { useGlobalState } from "../../State/context/Context";
import Header from "./segment/header";
import "./stopCard.css"



const StopCard = () => {
    const data = [
        {
            observerName: "Jay Alex",
            segment: "Cementing",
            onbservationDate: "27-Sep-2024",
            siteName: "Aramco",
            observationTime: "8:22 AM",
            contractorName: "Taqa",
            observationDuration:"1 hour",
            clientName: "Abdul",
            briefDescription:"Personnel Under Suspended Load",
        },
        {
            observerName: "Rowan Guffy",
            segment: "Nitrogen Pumping",
            onbservationDate: "28-Sep-2024",
            siteName: "Aramco",
            observationTime: "3:16 PM",
            contractorName: "Hydroserve",
            observationDuration:"30 mins",
            clientName: "Jason",
            briefDescription:"Fire Extinguisher Expired"
        },
    ];

  return (
        <div className="stopCardContainer" style={{backgroundColor:""}}>
            <div className="stopCard">
                {data.map((item,i)=>(
                    <div key={i} className="stopCardDisplay">
                    <Header item={item} i={i} />
                    </div>
                ))}
            </div>
        </div>
  )
}

export default StopCard
