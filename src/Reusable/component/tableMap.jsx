// import {useState} from "react";
import Pagination from "./pagination";
// import Hooks from "../../Hook/hooks";
import "../styles/tableMap.css";

const TableMap = (
   { 
    equipment, 
    headers, 
    data, 
    renderItems,
    handleAddNew,

    itemsPerPage,
    currentPage,
    onPageChange,
    totalItems,

  }
   ) =>{
    // const {pagination} = Hooks();
    // const { firstIndex, lastIndex, serialNumberFactor,totalItems, numberOfPages} = pagination(equipment,itemsPerPage, currentPage )


    function mapItem(number){
      return(
      data.map((item, i)=>(
        <tr
        key={i}
                className="container"
                style={{cursor:"pointer",textAlign:"start",}}     
         >
          {renderItems(item, i)}
         </tr>
 )))
};


  return(
    <div 
    className="tableMapContainer">
      <h3>{equipment}</h3>
      <button onClick={()=> handleAddNew()}>Add</button>
      <div className="tableWrapper">
    <table border={"0.5"} cellPadding={"10"} cellSpacing={"2"} 
    className="tableMap">
      <thead>
        <tr style={{backgroundColor:"orange"}}>
          {
            headers.map((header, index)=>(
              <th key={index}>{header}</th>
            ))
          }
        </tr>
      </thead>
    <tbody style={{maxHeight:"80vh", overflow:"auto", backgroundColor:"white"}}>
       { mapItem() }
    </tbody>
    </table>
    </div>
    <Pagination
    totalItems={totalItems}
    itemsPerPage={itemsPerPage} 
    currentPage={currentPage}
    onPageChange={(page)=>onPageChange(page)}
    />
     </div>
    )

}


export default TableMap;

