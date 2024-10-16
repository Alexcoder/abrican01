import { createSlice } from "@reduxjs/toolkit";
import Hooks from "../../Hook/hooks"


const { saveToLocalStorageReact, getFromLocalStorageReact } = Hooks();

const initialState = {
   pageColourIndicator: getFromLocalStorageReact("route"),
};



const context = createSlice({
    name: 'context',
    initialState,

    reducers:{
     clickedButton : (state, action)=> {
        saveToLocalStorageReact("route", action.payload)
        const fetched = getFromLocalStorageReact("route") 
        state.pageColourIndicator = fetched;
    },



    }
});

export const{
   clickedButton,

} = context.actions;

export default context.reducer;
