import { useState } from "react";


function Utils(){

    const initialStateEquipment={
        name  : "",
        department     : "",
        type   : "",
        serialNumber       : "",
        codeName     : "",
        location : "",  
      };  
    
    const[equipmentData , setEquipmentData] = useState(initialStateEquipment);
     
    function handleEquipmentInputChange(e){
        setEquipmentData({
          ...equipmentData,
          [e.target.name] : e.target.value
        })
      }; 
    
    const utilsCreateEquipment = [
      { placeholder: "Department", name: "department", value: equipmentData.department},
        { placeholder: "Equipment Name", name: "name", value: equipmentData.name},
        { placeholder: "Equipment Type", name: "type", value: equipmentData.type },
        { placeholder: "Equipment Serial Number", name: "serialNumber", value: equipmentData.serialNumber},
        { placeholder: "Equipment Code", name:"codeName", value: equipmentData.codeName},
        { placeholder: "Equipment Location", name:"location", value: equipmentData.location},
    ];

    const equipmentListUtils =[
      {
        department: "Cementing",
        equipment: "Cement Unit",
        equipmentType: "JEREH",
        equipmentSerialNumber : "00300016",
        location:"Base",
        equipmentCodeName:"cementUnit03",
      },
      {
        department: "Cementing",
        equipment: "Cement Unit",
        equipmentType: "JEREH",
        equipmentSerialNumber : "00300013",
        location:"Base",
        equipmentCodeName:"cementUnit06",
      },
      {
        equipment: "Cement Unit",
        department: "Cementing",
        equipmentType: "SCHLUMBERGER",
        equipmentSerialNumber : "02",
        location:"Base",
        equipmentCodeName:"cementUnit02",
      },
      {
        department: "Cementing",
        equipment: "Cement Unit",
        equipmentType: "SCHLUMBERGER",
        equipmentSerialNumber : "04",
        location:"Base",
        equipmentCodeName:"cementUnit04",
      },
      {
        department: "Cementing",
        equipment: "Cement Unit",
        equipmentType: "SCHLUMBERGER",
        equipmentSerialNumber : "05",
        location:"Base",
        equipmentCodeName:"cementUnit05",
      },
      {
        department: "Cementing",
        equipment: "120bbl BatchMixer",
        equipmentType: "SCHLUMBERGER",
        equipmentSerialNumber : "01",
        location:"Base",
        equipmentCodeName:"cementUnit01",
      },
    ]

    
console.log(equipmentData)
      return{
        handleEquipmentInputChange,
        utilsCreateEquipment,
        initialStateEquipment,
        equipmentListUtils,
        equipmentData,
        setEquipmentData,
      }
};

export default Utils

