// import { useEffect } from "react";
import Utils from "./utilsEquipment";
import TableMap from "../../../Reusable/component/tableMap";
import MultipleInputField from "../../../Reusable/component/multipleInputField";
import * as EquipmentSliceActions from "../../../State/reducers/equipment";
import EquipmentApiActions from "../../../State/actions-creators/equipment";
import { useDispatch, useSelector } from "react-redux";
import Hooks from "../../../Hook/hooks";
import "./styles.css";

function EquipmentList(){
    const dispatch = useDispatch();
    const {pageSet, inputFieldSet} = EquipmentSliceActions;
    const {equipment, currentPage, inputField, itemsPerPage} = useSelector(state=> state.equipment);
    const { utilsCreateEquipment, setEquipmentData, equipmentData } = Utils();
    const { addEquipment, deleteEquipment } = EquipmentApiActions();
    const { pagination, } = Hooks();

  
    const { firstIndex, lastIndex, serialNumberFactor,totalItems, numberOfPages} = pagination(equipment,itemsPerPage, currentPage )


    const display=(item,i)=>{       
      return(
        <>
               <td>{i+serialNumberFactor}</td>
               <td>{item["department"]}</td>
               <td>{item["equipmentName"]}</td>
               <td>{item["equipmentType"]}</td>
               <td>{item["equipmentSerialNumber"]}</td>
               <td >{item["equipmentCodeName"]}</td>
               <td onClick={()=> dispatch(deleteEquipment(item._id))}>-</td>
      </>
    )
  };
  const handleChange=(e)=>{
    setEquipmentData((prev)=> ({...prev, [e.target.name] : e.target.value})) ;
  };

  const handleSubmit=(e)=> {
    e.preventDefault();
    dispatch(addEquipment(equipmentData))
    dispatch(inputFieldSet(false));
    dispatch(pageSet(Number(numberOfPages)))
  };


    return(
        <div 
        className="equipmentContainer">
          { equipment?.length ?
            <TableMap
            //Table Props
             data={equipment.slice(firstIndex, lastIndex)}
             equipment={"EQUIPMENT"} 
             headers={["SN","DEPARTMENT", "EQUIPMENT", "TYPE","SERIAL NO", "CODE", ""]} 
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
              data={utilsCreateEquipment} 
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