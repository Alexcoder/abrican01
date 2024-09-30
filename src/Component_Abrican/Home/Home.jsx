import React from 'react';
import { useNavigate } from 'react-router-dom';
import {homePageData} from "./utils";
import "./home.css";

function Home (){

  const navigate = useNavigate();

  const mappedUtils = () =>(
    homePageData.map((item, i)=>(
      <div style={{display:"", cursor:"pointer", }}
      onClick={()=> navigate(item.page)}>
      <div style={{
        // display:"grid",
        padding:"5px 8px",
        border:"1.5px solid lightgray",
        boxShadow:"1px 1px 5px 0px black",
        borderRadius:"5px",
        backgroundColor:"white",
        color:"blue",
        minHeight:"80px"
      }}>
        <h4 key={i} style={{fontSize:"17px"}} > {item.title} </h4>
        <div>{item.count}</div>
      </div>

      </div>
    ))
  )

  

  return (
    <div className="homeContainer">
      <h1>ABR OIL SVS</h1>       
        <div className="mapDisplay">
        {mappedUtils()}</div>
    </div>
  )
}

export default Home
