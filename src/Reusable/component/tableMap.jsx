import {useState} from "react";
import "../styles/tableMap.css";

const TableMap = (
   { 
    equipment, 
    headers, 
    data, 
    renderItems,

  }
   ) =>{

    function mapItem(number){
      return(
      data[number].map((item, i)=>(
        <tr
                className="container"
                style={{cursor:"pointer",textAlign:"start",}}     
         >
          {renderItems(item, i)}
         </tr>
 )))
};


  return(
    <div style={{minWidth:"70vw", backgroundColor:"", marginTop:"0px"}}>
      <h3>{equipment}</h3>
    <table border="0.5" cellPadding={"10"} cellSpacing={"2"} style={{minWidth:"70vw", backgroundColor:"lightgray"}}>
      <thead>
        <tr style={{backgroundColor:"orange"}}>
          {
            headers.map((header, index)=>(
              <th key={index}>{header}</th>
            ))
          }
        </tr>
      </thead>
    <tbody style={{maxHeight:"80vh", overflow:"auto"}}>
       { mapItem(0) }
       { mapItem(1) }  
    </tbody>
    </table>
    </div>
    )

}


export default TableMap;

