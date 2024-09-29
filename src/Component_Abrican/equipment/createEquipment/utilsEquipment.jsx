import { useState } from "react";


function Utils(){

    const initialStateEquipment={
        personnelName  : "",
        department     : "",
        coverallSize   : "",
        bootSize       : "",
        dateJoined     : "",
        employeeNumber : "",  
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
        { placeholder: "Coverall Size", name: "coverallSize", value: equipmentData.coverallSize },
        { placeholder: "Boot Size", name: "bootSize", value: equipmentData.bootSize},
        { placeholder: "Date Joined", name:"dateJoined", value: equipmentData.dateJoined},
        { placeholder: "Equipment Number", name:"equipmentNumber", value: equipmentData.employeeNumber},
    ];

    const equipmentListUtils =[
      // {
      //   department: "DEPARTMENT",
      //   equipment: "EQUIPMENT NAME",
      //   equipmentType: "TYPE",
      //   equipmentSerialNumber : "SERIAL NUMBER",
      //   location:"LOCATION",
      //   equipmentCodeName:"",
      // },
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

    

      return{
        handleEquipmentInputChange,
        utilsCreateEquipment,
        initialStateEquipment,
        equipmentListUtils,
      }
};

export default Utils

