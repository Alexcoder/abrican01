import { useState } from "react";
import Utils from "./equipmentInventory_utils";
// import { useNavigate } from "react-router-dom";
import Hooks from "../../../Hook/hooks";
import TableMap from "../../../Reusable/component/tableMap";

function EquipmentInventoryList(){
    const {
       cementUnit03Inventory,
     } = Utils();
    // const navigate = useNavigate();
    const {pagination} = Hooks()
    const[currentPage, setCurrentPage]=useState(1)
    const itemsPerPage = 10
    const { firstIndex, lastIndex, serialNumberFactor,totalItems, numberOfPages} = pagination(cementUnit03Inventory,itemsPerPage, currentPage )


    const display=(item,i)=>{   
      return(
        <>
           <td>{i+serialNumberFactor}</td>
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
              data={cementUnit03Inventory.slice(firstIndex, lastIndex)}
              equipment={ renderTitle()}
              headers={["SN", "IRON", "TAG", "LOCATION",]}
              renderItems={(item,i)=> display(item,i)}
              handleAddNew={()=>{setCurrentPage(numberOfPages)}}

              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              onPageChange={(page)=> setCurrentPage(page)}
              currentPage={currentPage}
            />

        </div>
    )
}

export default EquipmentInventoryList;