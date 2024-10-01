import { useState } from "react";
import Utils from "./utilsEquipment";
// import { useNavigate } from "react-router-dom";
import TableMap from "../../../Reusable/component/tableMap";
import MultipleInputField from "../../../Reusable/component/multipleInputField";
import "./styles.css";

function EquipmentList(){
    const { equipmentListUtils, utilsCreateEquipment, setEquipmentData } = Utils();
    // const navigate = useNavigate();

    // const equipmentDetailsPage=(item)=>{
    //     navigate(`/${item.code}`)
    // };
    const [openInput, setOpenInput] = useState(false)

    const display=(item,i)=>{       
      return(
        <>
               <td>{i+1}</td>
               <td>{item["department"]}</td>
               <td>{item["equipment"]}</td>
               <td>{item["equipmentType"]}</td>
               <td>{item["equipmentSerialNumber"]}</td>
               <td>{item["equipmentCodeName"]}</td>
               <td>{item["location"]}</td>
      </>
    )
  };
  const handleChange=(e)=>{
    setEquipmentData((prev)=> ({...prev, [e.target.name] : e.target.value})) ;
  };
  const handleSubmit=(e)=>{

  };


    return(
        <div 
          style={{backgroundColor:"darkgray", display:"grid", justifyItems:"center", width:"", minHeight:"100vh" }}
          >
            <TableMap
             data={[equipmentListUtils,[]]}
             equipment={"EQUIPMENT"} 
             headers={["SN","DEPARTMENT", "EQUIPMENT", "TYPE","SERIAL NO", "CODE", "LOCATION"]} 
             renderItems={(item,i)=> display(item,i)}
             handleAddNew={()=>setOpenInput(true)}
            />
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