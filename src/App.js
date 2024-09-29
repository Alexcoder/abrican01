// import { useState } from "react";
import { Route, Routes , useLocation} from 'react-router-dom';

import Home from "./Component_Abrican/Home/Home.jsx";
// import SideBarAbrican from './Abrican Personnel PPE/AbricanSideBar/sideBarAbrican.jsx';
import SideBarAbrican from "./Component_Abrican/SideBar/sideBarAbrican.jsx"
import CreatePersonnelProfile from "./Component_Abrican/personnel/createPersonnelProfile.jsx";
import PPERequest from './Component_Abrican/ppeHome/ppeRequest.jsx';
import Personnel from './Component_Abrican/personnel/personnelList.jsx';
import Equipment from './Component_Abrican/equipment/createEquipment/equipmentList.jsx';
import EquipmentInventory from './Component_Abrican/equipment/createInventory/equipmentInventory_list.jsx';
import EquipmentHome from './Component_Abrican/equipment/equipmentHome.jsx';

import StopCard from './Component_Abrican/stopCard/stopCard.jsx';
import './App.css';

function App() {

  // const [access, setAccess] = useState(false);
  const location = useLocation();



  return (
    <div className="App">
     { location.pathname !== "/" && <SideBarAbrican/>}
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
