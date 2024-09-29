import { useState } from "react";
import Utils from "./utilsEquipment";
import { useNavigate } from "react-router-dom";
import TableMap from "../../../Reusable/component/tableMap";
import "./equipment_create.css";

function EquipmentList(){
    const { equipmentListUtils,  } = Utils();
    const navigate = useNavigate();

    const equipmentDetailsPage=(item)=>{
        navigate(`/${item.code}`)
    };

    const display=(item,i)=>{       
      return(
        <>
               <td>{i+1}</td>
               <td>{item["department"]}</td>
               <td>{item["equipment"]}</td>
               <td>{item["equipmentType"]}</td>
               <td>{item["equipmentSerialNumber"]}</td>
               <td>{item["equipmentCodeName"]}</td>
               <td>{item["location"]}</td>
      </>
    )
  };

    return(
        <div 
          style={{backgroundColor:"darkgray", display:"grid", justifyItems:"center", width:"", minHeight:"100vh" }}
          >
            <TableMap
             data={[equipmentListUtils,[]]}
             equipment={"EQUIPMENT"} 
             headers={["SN","DEPARTMENT", "EQUIPMENT", "TYPE","SERIAL NO", "CODE", "LOCATION"]} 
             renderItems={(item,i)=> display(item,i)}
            />
        </div>
    )
}

export default EquipmentList;