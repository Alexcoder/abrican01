import { useState } from "react";
import Utils from "./utilsCreatePersonnelProfile";
import TableMap from "../../Reusable/component/tableMap";

function PersonnelList(){
    const { personnelListUtils } = Utils();

    const display=(item,i)=>{  
      const label = ["name", "department", "position", "bootSize", "coverallSize"]     
      return(
        <>
               <td>{i+1}</td>
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
             data={[personnelListUtils, []]}
             renderItems={(item,i)=> display(item,i)}
            />

            </div> 
        </div>
    )
}

export default PersonnelList;