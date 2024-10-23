// import { useEffect } from "react";
import Utils from "./utils";
import TableMap from "../../../Reusable/component/tableMap";
import MultipleInputField from "../../../Reusable/component/multipleInputField";
import * as InventorySliceActions from "../../../State/reducers/inventory";
import EquipmentApiActions from "../../../State/actions-creators/equipment";
import { useDispatch, useSelector } from "react-redux";
import Hooks from "../../../Hook/hooks";
import "./styles.css";

function EquipmentList(){
    const dispatch = useDispatch();
    const {pageSet, inputFieldSet} = InventorySliceActions;
    const {inventory, currentPage, inputField, itemsPerPage} = useSelector(state=> state.inventory);
    const { utilsCreateEquipmentInventory, setEquipmentInventory, equipmentInventory, cementUnit03Inventory} = Utils();
    const { addNewInventory,  } = EquipmentApiActions(); //deleteInventory
    const { pagination, } = Hooks();

  

    const { firstIndex, lastIndex, serialNumberFactor,totalItems, numberOfPages} = pagination(cementUnit03Inventory,itemsPerPage, currentPage )



  const display=(mapItem,i)=>{   
    return(
      <>
         <td>{i+serialNumberFactor}</td>
         <td>{mapItem.item}</td>
         <td>{mapItem.item}</td>
         <td>{mapItem.location}</td>
   </>
    )
};


  const handleChange=(e)=>{
    setEquipmentInventory((prev)=> ({...prev, [e.target.name] : e.target.value})) ;
  };

  const handleSubmit=(e)=> {
    e.preventDefault();
    dispatch(addNewInventory(equipmentInventory))
    dispatch(inputFieldSet(false));
    dispatch(pageSet(Number(numberOfPages)))
  };


    return(
        <div 
        className="equipmentContainer">
          { inventory?.length ?
            <TableMap
            //Table Props
             data={cementUnit03Inventory.slice(firstIndex, lastIndex)}
             equipment={
             <div>
              {/* <div>INVENTORY</div>             */}
              <div style={{textTransform:"capitalize", paddingTop:""}}>{cementUnit03Inventory[0].code}</div>            
              <div style={{fontWeight:"400", paddingTop:""}}>{cementUnit03Inventory[0].serialNumber}</div>            
              </div>}
             headers={["SN", "IRON", "TAG", "LOCATION",]} 
             renderItems={(item,i)=> display(item,i)}
             handleAddNew={()=> dispatch(inputFieldSet(true))}
             
             //Pagination Props
             totalItems={totalItems}
             itemsPerPage={itemsPerPage}
             onPageChange={(page)=> dispatch(pageSet(Number(page)))}
             currentPage={currentPage}
            />
            : 
            <div style={{diaplay:"flex", alignContent:"center"}}>Wait While Page Loads Equipment</div>
          }
             <div>
             </div>
           { inputField && 
             <MultipleInputField
              data={utilsCreateEquipmentInventory} 
              onChange={handleChange} 
              onSubmit={(e)=> handleSubmit(e)} 
              handleClose={()=> dispatch(inputFieldSet(false))}
              buttonLabel={"Submit"} 
              title={"CREATE"} 
              disabled={false}
              />
           } 
        </div>
    )
}

export default EquipmentList;







//     return(
//         <div 
//           style={{
//             backgroundColor:"darkgray",
//             display:"grid",
//             justifyItems:"center", 
//             minHeight: "100vh",
//             }}>

//             <TableMap
//               data={cementUnit03Inventory.slice(firstIndex, lastIndex)}
//               equipment={ renderTitle()}
//               renderItems={(item,i)=> display(item,i)}
//               handleAddNew={()=>{setCurrentPage(numberOfPages)}}

//               totalItems={totalItems}
//               itemsPerPage={itemsPerPage}
//               onPageChange={(page)=> setCurrentPage(page)}
//               currentPage={currentPage}
//             />

//         </div>
//     )
// }

// export default EquipmentInventoryList;


