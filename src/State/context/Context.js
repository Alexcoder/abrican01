import React, {createContext, useState ,useContext } from 'react';


export const StateContext = createContext();



export const ContextProvider = ({children}) => {
  const initialStateEquipment={
    equipmentName       : "",
    department          : "",
    equipmentType       : "",
    equipmentLocation   : "",
  };  
  const [equipment, setEquipment] = useState(initialStateEquipment);

  const initialStatePersonnelProfile={
    personnelName  : "",
    department     : "",
    coverallSize   : "",
    bootSize       : "",
    dateJoined     : "",
    employeeNumber : "",  
  };  
const[personnelData , setPersonnelData] = useState(initialStatePersonnelProfile);
 


  return (
    <StateContext.Provider
    value={{
     equipment, setEquipment,
     personnelData , setPersonnelData,
    }}
    >
        {children}
    </StateContext.Provider>
  )
}

export const useGlobalState =() => useContext (StateContext);

