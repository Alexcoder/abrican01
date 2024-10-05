// import { useState } from "react";
import Utils from "./equipmentInventory_utils";
// import { useNavigate } from "react-router-dom";
import TableMap from "../../../Reusable/component/tableMap";

function EquipmentInventoryList(){
    const {
       cementUnit03Inventory,
     } = Utils();
    // const navigate = useNavigate();

    const display=(item,i)=>{   
      return(
        <>
           <td>{i+1}</td>
           {/* <td>{item.department}</td> */}
           {/* <td>{item.equipment}</td>         */}
           <td>{item.ironType}</td>
           <td>{item.ironTag}</td>
           <td>{item.location}</td>
     </>
      )
};

function renderTitle(){

  return(
    <div>
      <div style={{textTransform:"capitalize", fontSize:"40px"}}>{cementUnit03Inventory[0].department}</div>
      <div style={{textTransform:"capitalize", fontWeight:"500", paddingTop:"10px"}}>{cementUnit03Inventory[0].code}</div>
    </div>
  )
}



    return(
        <div 
          style={{
            backgroundColor:"darkgray",
            display:"grid",
            justifyItems:"center", 
            minHeight: "100vh",
            }}>

            <TableMap
              data={cementUnit03Inventory}
              equipment={ renderTitle()}
              headers={["SN", "IRON", "TAG", "LOCATION",]}
              renderItems={(item,i)=> display(item,i)}
              handleAddNew={()=>{}}
            />

        </div>
    )
}

export default EquipmentInventoryList;