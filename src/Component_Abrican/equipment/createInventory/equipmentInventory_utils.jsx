import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Utils(){
    
    const navigate = useNavigate();
    const initialStateEquipmentInventory={
        personnelName  : "",
        department     : "",
        coverallSize   : "",
        bootSize       : "",
        dateJoined     : "",
        employeeNumber : "",  
      };  
    
    const[equipmentInventory , setEquipmentInventory] = useState(initialStateEquipmentInventory);
     
    function handleEquipmentInventoryInputChange(e){
        setEquipmentInventory({
          ...equipmentInventory,
          [e.target.name] : e.target.value
        })
      }; 
    
    const utilsCreateEquipmentInventory = [
      { placeholder: "Department", name: "department", value: equipmentInventory.department},
        { placeholder: "Equipment Name", name: "equipmentName", value: equipmentInventory.equipmentName},
        { placeholder: "Coverall Size", name: "coverallSize", value: equipmentInventory.coverallSize },
        { placeholder: "Boot Size", name: "bootSize", value: equipmentInventory.bootSize},
        { placeholder: "Date Joined", name:"dateJoined", value: equipmentInventory.dateJoined},
        { placeholder: "Equipment Number", name:"equipmentNumber", value: equipmentInventory.employeeNumber},
    ];

    const equipmentInventoryListUtils =[
     
      {
        department: "Cementing",
        equipment: "Cement Unit",
        type: "JEREH",
        serialNumber : "00300016",
        category: "in",
        location:"Base",
        code:"cementUnit03",
        ironType : "10ft Chiksan",
        ironTag: "CUT-03 1234",
      },
      {
        department: "Cementing",
        equipment: "Cement Unit",
        type: "JEREH",
        serialNumber : "CUT-03 10ft 77756466",
        category: "in",
        location:"Base",
        code:"cementUnit03",
        ironType : "10ft Chiksan",
        ironTag: "CUT-03 123467",
      },
      {
        department: "Cementing",
        equipment: "Cement Unit",
        type: "JEREH",
        serialNumber : "CUT-03 10ft 77756467",
        category: "in",
        location:"Base",
        code:"cementUnit03",
        ironType : "10ft Chiksan",
        ironTag: "CUT-03 1234675",
      },
      {
        department: "Cementing",
        equipment: "Cement Unit",
        type: "JEREH",
        serialNumber : "00300013",
        category: "out",
        location:"Base",
        code:"cementUnit06",
        ironType : "10ft Chiksan",
        ironTag: "CUT-06 2234675",
      },
      {
        department: "Cementing",
        equipment: "Cement Unit",
        type: "JEREH",
        serialNumber : "00300013",
        category: "out",
        location:"Base",
        code:"cementUnit03",
        ironType : "2x2 inch plug valve",
        ironTag: "CUT-06 2234675",
      },
      {
        department: "Cementing",
        equipment: "Cement Unit",
        type: "SCHLUMBERGER",
        serialNumber : "02",
        category: "in",
        location:"Base",
        code:"cementUnit02",
        ironType : "2-way Swivel",
        ironTag: "CUT-02 2234675",
      },
      {
        department: "Cementing",
        equipment: "Cement Unit",
        type: "SCHLUMBERGER",
        serialNumber : "04",
        category: "out",
        location:"Base",
        code:"cementUnit04",
        ironType : "2-way Swivel",
        ironTag: "CUT-04 2234675",
      },
      {
        department: "Cementing",
        equipment: "Cement Unit",
        type: "SCHLUMBERGER",
        serialNumber : "05",
        category: "out",
        location:"Base",
        code:"cementUnit05",
        ironType : "10ft Chiksan",
        ironTag: "CUT-05 2234675",
      },
      {
        department: "Cementing",
        equipment: "120bbl BatchMixer",
        type: "SCHLUMBERGER",
        serialNumber : "01",
        category: "in",
        location:"Base",
        code:"cementUnit01",
        ironType : "2x2 Plug Valve",
        ironTag: "CUT-01 2234675",
      },
    ];
    
    
    const ironFilterHook=(equipmentArrayData, unitCodeName, ironDescription)=>{
     const filtered = equipmentArrayData.filter((item)=> 
         (item.code.includes(unitCodeName) 
         && item.ironType.includes(ironDescription)));

         return filtered
    } 

    
    const cementUnit03And12ftChiksan = ironFilterHook(equipmentInventoryListUtils,"cementUnit03", "12ft Chiksan" ) 
    const cementUnit03And2x2PlugValve = ironFilterHook(equipmentInventoryListUtils,"cementUnit03", "2x2 inch plug valve" ) 
    const cementUnit06And10ftChiksan = ironFilterHook(equipmentInventoryListUtils,"cementUnit06", "10ft Chiksan" ) 
       

    function cementUnit03And10ftChiksan(){
       const newest =[]
      for (const item of equipmentInventoryListUtils){
        if(
            (item.code==="cementUnit03"
            && item.ironType===("10ft Chiksan"))
            ){
          newest.push(item)
        }
      }

      return newest
    };
          

const equipmentDetailsPage=(item)=>{
  navigate(`/${item.code}`)
};
    

      return{
        handleEquipmentInventoryInputChange,
        utilsCreateEquipmentInventory,
        initialStateEquipmentInventory,
        equipmentInventoryListUtils,
        cementUnit03And10ftChiksan : cementUnit03And10ftChiksan(),
        cementUnit03And2x2PlugValve,
        cementUnit06And10ftChiksan,
        cementUnit03And12ftChiksan,
      }
};

export default Utils

