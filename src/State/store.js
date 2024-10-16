import {configureStore } from "@reduxjs/toolkit";
import EquipmentSlice from "./reducers/equipment";
import InventorySlice from "./reducers/inventory";
import ContextSlice from "./reducers/context";



const store = configureStore({
    reducer:{
        equipment : EquipmentSlice,
        inventory : InventorySlice,
        context : ContextSlice,
    }
});
export default store;