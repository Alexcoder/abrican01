import { useState } from "react";
import Utils from "./utilsCreatePersonnelProfile";
import TableMap from "../../Reusable/component/tableMap";
import Hooks from "../../Hook/hooks";

function PersonnelList(){
    const [currentPage, setCurrentPage]=useState(1) 
    const { personnelListUtils } = Utils();
    const { pagination } = Hooks();
    const itemsPerPage = window.innerWidth<720 ? 8 : 10;
    const { firstIndex, lastIndex, serialNumberFactor, totalItems } = pagination(personnelListUtils,itemsPerPage,currentPage)
   
    const display=(item,i)=>{  
      const label = ["name", "department", "position", "bootSize", "coverallSize"]     
      return(
        <>
               <td>{i+ serialNumberFactor}</td>
               <td>{item[label[0]]}</td>
               <td>{item[label[1]]}</td>
               <td>{item[label[2]]}</td>
               <td>{item[label[3]]}</td>
               <td>{item[label[4]]}</td>
      </>
    )
  };



    return(
        <div 
          style={{ 
            minHeight:"100vh",
            backgroundColor:"darkgray",
            display:"grid",
            justifyItems:"center",
          }}
          >
           <div 
             style={{maxHeight:"",overflow:"auto", marginTop:""}}
             >
            <TableMap
             equipment={`PERSONNEL ${personnelListUtils.length-1}`}
             headers={["SN","NAME", "DEPARTMENT", "POSITION", "BOOTSIZE","COVERALLSIZE" ]}
            //  Note data must be an array of 2 sub array
             data={personnelListUtils.slice(firstIndex, lastIndex)}
             renderItems={(item,i)=> display(item,i)}
             handleAddNew={()=> {}}

             totalItems={totalItems}
             itemsPerPage={itemsPerPage}
             onPageChange={(page)=> setCurrentPage(page)}
             currentPage={currentPage}
            />
            </div> 
        </div>
    )
}

export default PersonnelList;