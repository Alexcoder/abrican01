import { createSlice } from "@reduxjs/toolkit";
import * as Utils from "./tempUtils";


const { equipmentListUtils } = Utils;

const initialState = {
    equipment: [...equipmentListUtils],
    // equipment: [ ],
    currentPage: 1,
    itemsPerPage: 5,
    inputField: false,
};


const equipment = createSlice({
    name: 'equipment',
    initialState,

    reducers:{
     add : (state, action)=> {
      state.equipment.push(action?.payload)
    },

     equipmentList : (state, action)=> {
        state.equipment = action?.payload
    }, 

     update : (state, action)=>{
         const updateIndex = state.equipment.findIndex(item => item?._id === action?.payload?._id)
         state.equipment[updateIndex] = action?.payload?.data },  

    remove : (state, action)=>{
      const toDelete = state.equipment.findIndex((item)=> item?._id===action?.payload)
      state.equipment.splice(toDelete, 1) },

    pageSet : (state, action)=> {state.currentPage = action.payload},

    inputFieldSet : (state, action)=> {
        state.inputField = action.payload},
    }
});

export const{
    add,
    equipmentList,
    remove,
    update,
    pageSet,
    inputFieldSet
} = equipment.actions;

export default equipment.reducer;
