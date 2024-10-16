// import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as ContextActions from "../../State/reducers/context";
import { useDispatch, useSelector } from 'react-redux';
import "./sideBarAbrican.css";

const SideBarAbrican = () => {
  const {pageColourIndicator} = useSelector(state=> state.context);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {clickedButton} = ContextActions;

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
          style={{
            backgroundColor: pageColourIndicator===item.title? "blue" : "white",
            color: pageColourIndicator===item.title? "white" : "",
          }}
          key={i} 
          onClick={()=> {
            dispatch(clickedButton(item.title))
            navigate(item.page);
          }}
           >
              {item.title}
          </div>
        ))}

      
    </div>
  )
}

export default SideBarAbrican
