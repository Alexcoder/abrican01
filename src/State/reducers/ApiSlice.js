import { createSlice } from "@reduxjs/toolkit";
import * as Utils from "./tempUtils";

const { equipmentListUtils } = Utils;

const initialState = {
    equipment: [...equipmentListUtils],
    equipmentIronInventory: [], 
}


const apiSlice = createSlice({
    name: 'apiSlice',
    initialState,

    reducers:{
     addEquipment : (state, action)=>{
      state.equipment.push(action?.payload)
     },
     addEquipmentIronsInventory : (state, action)=>{
         state.equipmentIronInventory.push(action?.payload);
     },
     equipmentList : (state, action)=>{
         state.equipment = action.payload;
        },
     equipmentIronInventory : (state, action)=>{
       state.equipmentIronInventory = action?.payload;
     },
    },
    removeIronInventory : (state, action)=>{
      const toDelete = state.equipmentIronInventory.findIndex((item)=> item?._id===action?.payload)
      state.equipmentIronInventory.splice(toDelete, 1);
    },
    removeEquipment : (state, action)=>{
      const toDelete = state.equipment.findIndex((item)=> item?._id===action?.payload)
      state.equipment.splice(toDelete, 1);
    },
});

export const{
    addEquipment,
    addEquipmentIronsInventory,
    equipmentList,
    equipmentIronInventory,
    removeEquipment,
    removeIronInventory,
} = apiSlice.actions;

export default apiSlice.reducer;
