import { useState,  } from "react";
// useEffect
import Utils from "./utilsEquipment";
// import { useNavigate } from "react-router-dom";
import TableMap from "../../../Reusable/component/tableMap";
import MultipleInputField from "../../../Reusable/component/multipleInputField";
import ApiActions from "../../../State/actions-creators/apiActions";
import { useDispatch, useSelector } from "react-redux";
import Hooks from "../../../Hook/hooks";
import "./styles.css";

function EquipmentList(){
  const dispatch = useDispatch();
    const {equipment} = useSelector(state=> state.ApiSlice);
    const { utilsCreateEquipment, setEquipmentData, equipmentData } = Utils();
    const { addNewEquipment,  } = ApiActions();
    const {pagination} = Hooks()
    // fetchEquipment
    
    const [openInput, setOpenInput] = useState(false)
    const[currentPage, setCurrentPage]=useState(1)
    const itemsPerPage = 5
    const { firstIndex, lastIndex, serialNumberFactor,totalItems, numberOfPages} = pagination(equipment,itemsPerPage, currentPage )

    // useEffect(()=>{
    //   fetchEquipment(page)
    // },[fetchEquipment, page])

    const display=(item,i)=>{       
      return(
        <>
               <td>{i+serialNumberFactor}</td>
               <td>{item["department"]}</td>
               <td>{item["equipmentName"]}</td>
               <td>{item["equipmentType"]}</td>
               <td>{item["equipmentSerialNumber"]}</td>
               <td>{item["equipmentCodeName"]}</td>
               {/* <td>{item["location"]}</td> */}
      </>
    )
  };
  const handleChange=(e)=>{
    setEquipmentData((prev)=> ({...prev, [e.target.name] : e.target.value})) ;
  };
  const handleSubmit=()=> {dispatch(addNewEquipment(equipmentData)); setCurrentPage(numberOfPages); setOpenInput(false)};


    return(
        <div 
        className="equipmentContainer">
            <TableMap
             data={equipment.slice(firstIndex, lastIndex)}
             equipment={"EQUIPMENT"} 
             headers={["SN","DEPARTMENT", "EQUIPMENT", "TYPE","SERIAL NO", "CODE",]} 
             renderItems={(item,i)=> display(item,i)}
             handleAddNew={()=>setOpenInput(true)}

             totalItems={totalItems}
             itemsPerPage={itemsPerPage}
             onPageChange={(page)=> setCurrentPage(page)}
             currentPage={currentPage}
            />
             <div>
             </div>
           { openInput && 
             <MultipleInputField
              data={utilsCreateEquipment} 
              onChange={handleChange} 
              onClick={()=> handleSubmit()} 
              handleClose={()=> setOpenInput(false)}
              buttonLabel={"Submit"} 
              title={"CREATE"} 
              disabled={false}
              />
           } 
        </div>
    )
}

export default EquipmentList;