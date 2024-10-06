import * as reducerActions from "../reducers/ApiSlice";
import axios from "axios";

function Actions() {
  const api = axios.create({
     baseURL:"http://localhost:5000",
     timeout: 20000, //Timeout after 20 seconds
     headers: { 'Content-Type': 'application.json'},
    });
    
    
    const { 
      addEquipment,
      addEquipmentIronsInventory,
      equipmentList,
      equipmentIronInventory,
      removeEquipment,
      removeIronInventory,  
      
    } = reducerActions;
    
    const fetchEquipment = () => async(dispatch)=> {
      try{
          const res = api.get("/api/equipment");
          dispatch(equipmentList(res?.data));
      }catch(error){
        console.log(error);
      }
  };
    const fetchEquipmentIronInventory = () => async(dispatch)=> {
      try{
          const res = api.get("/api/equipmentIron");
          dispatch(equipmentIronInventory(res?.data));
      }catch(error){
        console.log(error);
      }
  };
    const addNewEquipment = (equipmentData) => async(dispatch)=> {
      try{
          const res = api.post("/api/equipment", equipmentData);
          dispatch(addEquipment(res?.data));
      }catch(error){
        console.log(error);
      }
  };
    const addNewEquipmentIronInventory = (equipmentIronData) => async(dispatch)=> {
      try{
          const res = api.post("/api/equipmentIron", equipmentIronData);
          dispatch(addEquipmentIronsInventory(res?.data));
      }catch(error){
        console.log(error);
      }
  };
    const deleteEquipment = (idOfEquipment) => async(dispatch)=> {
      try{
          api.delete("/api/equipment", idOfEquipment);
          dispatch(removeEquipment(idOfEquipment));
      }catch(error){
        console.log(error);
      }
  };
    const deleteEquipmentIronInventory = (idOfIron) => async(dispatch)=> {
      try{
          api.delete("/api/equipmentIron", idOfIron);
          dispatch(removeIronInventory(idOfIron));
      }catch(error){
        console.log(error);
      }
  };

  return {
    fetchEquipment,
    fetchEquipmentIronInventory,
    addNewEquipment,
    addNewEquipmentIronInventory,
    deleteEquipment,
    deleteEquipmentIronInventory,
  };


};

export default Actions;


