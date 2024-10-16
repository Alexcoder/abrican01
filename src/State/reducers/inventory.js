import { createSlice } from "@reduxjs/toolkit";
import * as Utils from "./tempUtils";


const { equipmentListUtils } = Utils;

const initialState = {
    inventory: [...equipmentListUtils],
    currentPage: 1,
    itemsPerPage: 3,
    inputField: false,
};


const inventory = createSlice({
    name: 'inventory',
    initialState,

    reducers:{
     add : (state, action)=> {
      state.inventory.push(action?.payload)},

     inventoryList : (state, action)=>{
         state.inventory = action.payload;
        },
     
     update : (state, action)=>{
         const updateIndex = state.inventory.findIndex(item => item?._id === action?.payload?._id)
         state.inventory[updateIndex] = action?.payload?.data;
        },
     
    remove : (state, action)=>{
      const toDelete = state.inventory.findIndex((item)=> item?._id===action?.payload)
      state.inventory.splice(toDelete, 1);
    },

    pageSet : (state, action)=> {
      state.currentPage = action.payload },

    inputFieldSet : (state, action)=> { 
      state.inputField = action?.payload },
    }
});

export const{
    add,
    inventoryList,
    remove,
    update,
    pageSet,
    inputFieldSet
} = inventory.actions;

export default inventory.reducer;
