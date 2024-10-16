import * as reducerActions from "../reducers/equipment";
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
    
    const addNewEquipment = (equipmentData) => {
        const res = postRequest("/api/equipment/add", equipmentData);
        dispatch(add(res?.data ? res?.data : equipmentData));
    };
    const fetchEquipment = (id) => {
        const res =  getRequestWithQuery(`/api/equipmentIron?id=${id}`);
        dispatch(update(res?.data));
    };
    const updateEquipment = (id) => {
        const res =  updateRequest(`/api/equipmentIron?id=${id}`);
        dispatch(update({data: res, id}));
    };
    const deleteEquipment = (idOfEquipment) =>{
        deleteRequest(`/api/equipment/delete/${idOfEquipment}`);
        dispatch(remove(idOfEquipment));
     };

  return {
    fetchEquipment,
    addNewEquipment,
    deleteEquipment,
    updateEquipment,
  };


};

export default Actions;


