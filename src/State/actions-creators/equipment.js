import * as reducerActions from "../reducers/equipment";
import Hooks from "../../Hook/hooks";
// import { useDispatch } from "react-redux";

function Actions() {
  // const dispatch = useDispatch();
  const {
    postRequest,
    updateRequest,
    deleteRequest,
    getRequest,
    // getRequestWithQuery,
  } = Hooks()
    
    const { add, remove, update, equipmentList } = reducerActions;
    
    const addEquipment = (equipmentData)=>async(dispatch)=> {
      try{
        const {data} = await  postRequest("/api/equipment", equipmentData);
        dispatch(add(data))
      }catch(err){throw(err)}
    };

    const fetchEquipment = () => async(dispatch)=> {
      try{
        const res = await getRequest(`/api/equipment`);
        console.log(res)
        dispatch(equipmentList(res?.data));
      }catch(err){ throw(err)}
    };

    const updateEquipment = (equipmentID) => async(dispatch)=> {
      try{
        const res = await updateRequest(`/api/equipment?id=${equipmentID}`);
        dispatch(update({data: res, equipmentID}));
      }catch(err){ throw(err)}
    };

    const deleteEquipment = (equipmentID) => async(dispatch)=>{
      try{
        await deleteRequest(`/api/equipment/delete/${equipmentID}`);
        dispatch(remove(equipmentID));
      }catch(err){ throw(err)}
     };

  return {
    fetchEquipment,
    addEquipment,
    deleteEquipment,
    updateEquipment,
  };


};

export default Actions;


