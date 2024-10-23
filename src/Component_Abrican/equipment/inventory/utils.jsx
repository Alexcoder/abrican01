import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function Utils(){
    
    // const navigate = useNavigate();
    const initialStateEquipmentInventory={
        department     : "",
        equipment  : "",
        ironType   : "",
        tag       : "",
        location : "",  
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
        { placeholder: "Equipment", name: "equipment", value: equipmentInventory.equipment},
        { placeholder: "Item", name: "item", value: equipmentInventory.item },
        { placeholder: "Tag", name: "tag", value: equipmentInventory.tag},
        { placeholder: "Location", name:"location", value: equipmentInventory.location},
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
        item : "10ft Chiksan",
        tag: "CUT-03 1234",
      },
      {
        department: "Cementing",
        equipment: "Cement Unit",
        type: "JEREH",
        serialNumber : "CUT-03 10ft 77756466",
        category: "in",
        location:"Base",
        code:"cementUnit03",
        item : "10ft Chiksan",
        tag: "CUT-03 123467",
      },
      {
        department: "Cementing",
        equipment: "Cement Unit",
        type: "JEREH",
        serialNumber : "CUT-03 10ft 77756467",
        category: "in",
        location:"Base",
        code:"cementUnit03",
        item : "10ft Chiksan",
        tag: "CUT-03 1234675",
      },
      {
        department: "Cementing",
        equipment: "Cement Unit",
        type: "JEREH",
        serialNumber : "00300013",
        category: "out",
        location:"Base",
        code:"cementUnit06",
        item : "10ft Chiksan",
        tag: "CUT-06 2234675",
      },
      {
        department: "Cementing",
        equipment: "Cement Unit",
        type: "JEREH",
        serialNumber : "00300013",
        category: "out",
        location:"Base",
        code:"cementUnit03",
        item : "2x2 inch plug valve",
        tag: "CUT-06 2234675",
      },
      {
        department: "Cementing",
        equipment: "Cement Unit",
        type: "SCHLUMBERGER",
        serialNumber : "02",
        category: "in",
        location:"Base",
        code:"cementUnit02",
        item : "2-way Swivel",
        tag: "CUT-02 2234675",
      },
      {
        department: "Cementing",
        equipment: "Cement Unit",
        type: "SCHLUMBERGER",
        serialNumber : "04",
        category: "out",
        location:"Base",
        code:"cementUnit04",
        item : "2-way Swivel",
        tag: "CUT-04 2234675",
      },
      {
        department: "Cementing",
        equipment: "Cement Unit",
        type: "SCHLUMBERGER",
        serialNumber : "05",
        category: "out",
        location:"Base",
        code:"cementUnit05",
        item : "10ft Chiksan",
        tag: "CUT-05 2234675",
      },
      {
        department: "Cementing",
        equipment: "120bbl BatchMixer",
        type: "SCHLUMBERGER",
        serialNumber : "01",
        category: "in",
        location:"Base",
        code:"cementUnit01",
        item : "2x2 Plug Valve",
        tag: "CUT-01 2234675",
      },
    ];
    
    
    const ironFilterHook=(equipmentArrayData, unitCodeName, itemDescription)=>{
     const filtered = equipmentArrayData.filter((item)=> 
         (item.code.includes(unitCodeName) 
         && item.item.includes(itemDescription)));

         return filtered
    } ;

    
    const cementUnit06And10ftChiksan = ironFilterHook(equipmentInventoryListUtils,"cementUnit06", "10ft Chiksan" ) 
    

    function cementUnit03Inventory(unitCodeName="cementUnit03"){
      const cementUnit03And12ftChiksan  = ironFilterHook(equipmentInventoryListUtils, unitCodeName, "12ft Chiksan" ) 
      const cementUnit03And2x2PlugValve = ironFilterHook(equipmentInventoryListUtils, unitCodeName, "2x2 inch plug valve" ) 
      return [
        ...cementUnit03And10ftChiksan(),
        ...cementUnit03And2x2PlugValve,
        ...cementUnit03And12ftChiksan,
      ]
    };

    function cementUnit03And10ftChiksan(){
       const newest =[]
      for (const item of equipmentInventoryListUtils){
        if(
            (item.code==="cementUnit03"
            && item.item===("10ft Chiksan"))
            ){
          newest.push(item)
        }
      }
      return newest
    };
          

// const equipmentDetailsPage=(item)=>{
//   navigate(`/${item.code}`)
// };
    

      return{
        handleEquipmentInventoryInputChange,
        utilsCreateEquipmentInventory,
        initialStateEquipmentInventory,
        equipmentInventoryListUtils,
        cementUnit03And10ftChiksan : cementUnit03And10ftChiksan(),
        cementUnit06And10ftChiksan,
        cementUnit03Inventory: cementUnit03Inventory(),
        equipmentInventory,
        setEquipmentInventory,
      }
};

export default Utils

