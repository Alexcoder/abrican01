import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes , useLocation} from 'react-router-dom';
import * as MyComponents from "./Component_Abrican";
import EquipmentApiActions from "./State/actions-creators/equipment"
import './App.css';

function App() {

  const {
    Home,
    SideBar,
    Personnel,
    PPERequest,
    Equipment,
    EquipmentHome,
    StopCard,
    EquipmentInventory,
    CreatePersonnelProfile,
  } = MyComponents;

  const { fetchEquipment } = EquipmentApiActions();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch( fetchEquipment() )
  },[dispatch, fetchEquipment])

  const location = useLocation();

  return (
    <div className="App">
     { location.pathname !== "/" && <SideBar/>}
        <div style={{marginLeft: location.pathname !=="/" && "",}}>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/createProfile" element={ <CreatePersonnelProfile/>} />
          <Route path="/ppeRequest" element={ <PPERequest/>} />
          <Route path="/personnel" element={ <Personnel/>} />
          <Route path="/equipment" element={ <Equipment/>} />
          <Route path="/equipmentHome" element={ <EquipmentHome/>} />
          <Route path="/equipmentInventory" element={ <EquipmentInventory/>} /> 

          <Route path="/stopCard" element={ <StopCard/>} /> 
      </Routes>
        </div>
    </div>
  );
}

export default App;
