// import { useState } from "react";
import Utils from "./equipmentInventory_utils";
// import { useNavigate } from "react-router-dom";
import TableMap from "../../../Reusable/component/tableMap";

function EquipmentInventoryList(){
    const {
      //  cementUnit03And12ftChiksan,
       cementUnit03And10ftChiksan,
      //  cementUnit06And10ftChiksan,
       cementUnit03And2x2PlugValve,
     } = Utils();
    // const navigate = useNavigate();

    const display=(item,i)=>{   
      return(
        <>
           <td>{i+1}</td>
           <td>{item.department}</td>
           <td>{item.equipment}</td>        
           <td>{item.ironType}</td>
           <td>{item.ironTag}</td>
           <td>{item.location}</td>
     </>
      )
};


    return(
        <div 
          style={{
            // backgroundColor:"darkgray",
            display:"grid",
            justifyItems:"center", 
            }}>

            <TableMap
              data={[cementUnit03And10ftChiksan, cementUnit03And2x2PlugValve, ]}
              equipment={"CEMENT UNIT 03"}
              headers={["SN","DEPARTMENT", "EQUIPMENT", "IRON", "TAG", "LOCATION",]}
              renderItems={(item,i)=> display(item,i)}
              handleAddNew={()=>{}}
            />

        </div>
    )
}

export default EquipmentInventoryList;