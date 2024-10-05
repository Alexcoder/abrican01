import React from 'react';
import { useNavigate } from 'react-router-dom';
import {homePageData} from "./utils";
import "./home.css";

function Home (){

  const navigate = useNavigate();

  const mappedUtils = () =>(
    homePageData.map((item, i)=>(
      <div 
       key={i}
       style={{display:"", cursor:"pointer",  }}
       onClick={()=> navigate(item.page)}>
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
