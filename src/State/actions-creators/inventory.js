import * as reducerActions from "../reducers/inventory";
import Hooks from "../../Hook/hooks";
import { useDispatch } from "react-redux";

function Actions() {
  const dispatch = useDispatch();
  const {
    postRequest,
    updateRequest,
    deleteRequest,
    getRequestWithQuery,
  } = Hooks()
    
    const { add, remove, update, } = reducerActions;
    
    const addNewInventory = (equipmentData) => {
        const res = postRequest("/api/equipment/add", equipmentData);
        dispatch(add(res?.data ? res?.data : equipmentData));
    };
    const fetchInventory = (id) => {
        const res =  getRequestWithQuery(`/api/equipmentIron?id=${id}`);
        dispatch(update(res?.data));
    };
    const updateInventory = (id) => {
        const res =  updateRequest(`/api/equipmentIron?id=${id}`);
        dispatch(update({data: res, id}));
    };
    const deleteInventory = (idOfInventory) =>{
        deleteRequest(`/api/equipment/delete/${idOfInventory}`);
        dispatch(remove(idOfInventory));
     };

  return {
    fetchInventory,
    addNewInventory,
    deleteInventory,
    updateInventory,
  };


};

export default Actions;


