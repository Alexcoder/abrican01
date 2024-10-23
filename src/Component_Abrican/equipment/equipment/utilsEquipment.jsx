import { useState } from "react";


function Utils(){

    const initialStateEquipment={
        department     : "",
        equipmentName  : "",
        equipmentType   : "",
        equipmentSerialNumber       : "",
        equipmentCodeName     : "",
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
        { placeholder: "Equipment Name", name: "equipmentName", value: equipmentData.equipmentName},
        { placeholder: "Equipment Type", name: "equipmentType", value: equipmentData.equipmentType },
        { placeholder: "Equipment Serial Number", name: "equipmentSerialNumber", value: equipmentData.equipmentSerialNumber},
        { placeholder: "Equipment Code", name:"equipmentCodeName", value: equipmentData.equipmentCodeName},
        { placeholder: "Equipment Location", name:"location", value: equipmentData.location},
    ];

    const equipmentListUtils =[
      {
        department: "Cementing",
        equipmentName: "Cement Unit",
        equipmentType: "JEREH",
        equipmentSerialNumber : "00300016",
        location:"Base",
        equipmentCodeName:"cementUnit03",
      },
      {
        department: "Cementing",
        equipmentName: "Cement Unit",
        equipmentType: "JEREH",
        equipmentSerialNumber : "00300013",
        location:"Base",
        equipmentCodeName:"cementUnit06",
      },
      {
        equipmentName: "Cement Unit",
        department: "Cementing",
        equipmentType: "SCHLUMBERGER",
        equipmentSerialNumber : "02",
        location:"Base",
        equipmentCodeName:"cementUnit02",
      },
      {
        department: "Cementing",
        equipmentName: "Cement Unit",
        equipmentType: "SCHLUMBERGER",
        equipmentSerialNumber : "04",
        location:"Base",
        equipmentCodeName:"cementUnit04",
      },
      {
        department: "Cementing",
        equipmentName: "Cement Unit",
        equipmentType: "SCHLUMBERGER",
        equipmentSerialNumber : "05",
        location:"Base",
        equipmentCodeName:"cementUnit05",
      },
      {
        department: "Cementing",
        equipmentName: "120bbl BatchMixer",
        equipmentType: "SCHLUMBERGER",
        equipmentSerialNumber : "01",
        location:"Base",
        equipmentCodeName:"cementUnit01",
      },
    ]

    
// console.log(equipmentData)
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

