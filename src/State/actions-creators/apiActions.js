import * as reducerActions from "../reducers/ApiSlice";
import axios from "axios";

function Actions() {
  const api = axios.create({
     baseURL:"http://localhost:8000",
    //  timeout: 30000, //Timeout after 30 seconds
    //  headers: { 'Content-Type': 'application.json'},
    });
    
    
    const { 
      addEquipment,
      addEquipmentIronsInventory,
      equipmentList,
      equipmentIronInventory,
      removeEquipment,
      removeIronInventory,  
      
    } = reducerActions;
    
    const fetchEquipment = (page) => async(dispatch)=> {
      try{
          const res = await api.get(`/api/equipment?page=${page}`);
          console.log(res)
          dispatch(equipmentList(res?.data));
      }catch(error){
        console.log(error);
      }
  };
    const fetchEquipmentIronInventory = () => async(dispatch)=> {
      try{
          const res = await api.get("/api/equipmentIron");
          dispatch(equipmentIronInventory(res?.data));
        }catch(error){
          console.log(error);
        }
      };
      const addNewEquipment = (equipmentData) => async(dispatch)=> {
        console.log(equipmentData)
        try{
          const res = await api.post("/api/equipment/add", equipmentData);
          // const res = await axios.post("http://localhost:8000/api/equipment/add", equipmentData);
          console.log(res?.data)
          dispatch(addEquipment(res?.data ? res?.data : equipmentData));
      }catch(error){
        console.log(error);
      }
  };
    const addNewEquipmentIronInventory = (equipmentIronData) => async(dispatch)=> {
      try{
          const res = await api.post("/api/equipmentIron/", equipmentIronData);
          dispatch(addEquipmentIronsInventory(res?.data));
      }catch(error){
        console.log(error);
      }
  };
    const deleteEquipment = (idOfEquipment) => async(dispatch)=> {
      try{
          await api.delete(`/api/equipment/delete/${idOfEquipment}`, idOfEquipment);
          dispatch(removeEquipment(idOfEquipment));
      }catch(error){
        console.log(error);
      }
  };
    const deleteEquipmentIronInventory = (idOfIron) => async(dispatch)=> {
      try{
          await api.delete("/api/equipmentIron/", idOfIron);
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


