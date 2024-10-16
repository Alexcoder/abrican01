import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomePageHook from "./utils";
import * as ContextActions from "../../State/reducers/context"
import "./home.css";
import { useDispatch, useSelector } from 'react-redux';

function Home (){


  const navigate = useNavigate();
  const { data } = HomePageHook();
  const {clickedButton } = ContextActions;
  const dispatch = useDispatch(); 
  const {pageColourIndicator} = useSelector(state=> state.context);

  const mappedUtils = () =>(
    data.map((item, i)=>(
      <div 
       key={i}
       style={{
        cursor:"pointer",  
        backgroundColor: pageColourIndicator===item.title? "blue" : "white",
        color: pageColourIndicator===item.title? "white" : "",
      }}

       onClick={()=>{
        dispatch( clickedButton(item.title))
        navigate(item.page)
        }}>
      <div 
      className='homeMapWrapper'>
        <h4 key={i} style={{fontSize:"17px",}} > {item.title} </h4>
        <div>{item.count}</div>
      </div>

      </div>
    ))
  )

  

  return (
    <div className="homeContainer">
      <h1 style={{position:"fixed", top:"3px", left:"5px", right:"5px"}}>ABR OIL SVS</h1>       
        <div className="mapDisplay">
        {mappedUtils()}</div>
    </div>
  )
}

export default Home
