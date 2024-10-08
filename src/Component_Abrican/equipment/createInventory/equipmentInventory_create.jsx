import React, {useState} from 'react';
import Utils from "./equipmentInventory_utils";

const CreateEquipment = () => {
  const { 
         utilsCreateEquipmentInventory,
         handleEquipmentInventoryInputChange,
    } = Utils()
  
  const[submit , setSubmit] = useState(false);

  const mappedUtil = () => (
    utilsCreateEquipmentInventory.map((item, i)=>(
        <input
        key={i}
        onChange={handleEquipmentInventoryInputChange} 
        placeholder={item.placeholder}
        name={item.name}
        value={item.value}
        style={{padding:"5px", border:"1.5px solid darkgray"}}
         />

    ))
  )
  
  const productionCheck ={
    clickStatus: submit? "Submitted" : "Not Submitted",
  };


  return (
    <main style={{backgroundColor:"darkgray", height:"100vh", padding:"10px 5px"}}>
      <h3>ABRICAN CREATE PERSONNEL PROFILE </h3>
     <div style={{marginTop: "1px", display:"flex", flexDirection:"column", gap:"15px", padding:"10px 30px",}}>

        {mappedUtil()}

        <button
        onClick={()=> setSubmit((prev)=> !prev)}
         style={{padding:"10px", backgroundColor:"blue", border:"none", color:"white"}}> Create Profile </button>
     </div>
      {productionCheck.clickStatus}
    </main>
  )
}

export default CreateEquipment

