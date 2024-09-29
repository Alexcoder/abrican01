import React from 'react';
import { useNavigate } from 'react-router-dom';

function ReuseHome (
    {
      title,
      data,
      // navigate, 
      columns,
    }
  ){

  const navigate = useNavigate();

  const mappedUtils = () =>(
    data.map((item, i)=>(
      <div style={{display:"", cursor:"pointer", }}
      onClick={()=> navigate(item.page)}>
      <div style={{
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
    <div style={{padding:"1px 10px", backgroundColor:"darkgray", minHeight:"100vh"}}>
      <h1>{title}</h1>
      <div style={{
        display:"grid",
        gridTemplateColumns:`repeat(${columns}, 1fr)`,
        gap:"40px",
        marginTop:"80px",
      }}>{mappedUtils()}</div>
    </div>
  )
}

export default ReuseHome
