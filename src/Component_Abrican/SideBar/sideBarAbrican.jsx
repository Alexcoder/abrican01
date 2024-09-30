// import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./sideBarAbrican.css";

const SideBarAbrican = () => {
  const navigate = useNavigate();

    const sideBarAbricanUtils =[
      { title: "Home", page:"/"},
       { title: "Personnel", page:"/personnel"},
      //  { title: "PPE", page:"/personnelPPE"},
      //  { title: "Jobs", page:"/jobs"},
      //  { title: "Services", page:"/services"},
       { title: "Equipment", page:"/equipment"},
       { title: "Inventory", page:"/equipmentInventory"},
       { title: "StopCard", page:"/stopCard"},
    ]

  return (
      <div className="sideBarContainer">
        { sideBarAbricanUtils.map((item, i)=>(
          <div 
          className='sideBarAbricanButtonWrap'
          key={i} 
          onClick={()=> navigate(item.page)}
           >
              {item.title}
          </div>
        ))}

      
    </div>
  )
}

export default SideBarAbrican
