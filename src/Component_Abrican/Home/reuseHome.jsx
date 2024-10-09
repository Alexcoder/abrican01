import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./reuseHome.css"

function ReuseHome (
    {
      title,
      data,
    }
  ){

  const navigate = useNavigate();

  const mappedUtils = () =>(
    data.map((item, i)=>(
      <div style={{display:"", cursor:"pointer", }}
      key={i}
      onClick={()=> navigate(item.page)}>
      <div 
      className='reuseHomeMapWrapper'>
        <h4 style={{fontSize:"17px"}} > {item.title} </h4>
        <div>{item.count}</div>
      </div>

      </div>
    ))
  )

  

  return (
    <div 
    className='reuseHomeContainer'>
      <h1>{title}</h1>
      <div 
        className='reuseHomeMapContainer'>
        {mappedUtils()}
      </div>
    </div>
  )
}

export default ReuseHome
