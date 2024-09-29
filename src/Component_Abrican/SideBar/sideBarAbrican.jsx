import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SideBarAbrican = () => {
  const navigate = useNavigate();

    const sideBarAbricanUtils =[
      { title: "Home", page:"/"},
       { title: "Personnel", page:"/personnel"},
       { title: "PPE", page:"/personnelPPE"},
       { title: "Jobs", page:"/jobs"},
       { title: "Services", page:"/services"},
       { title: "Equipment", page:"/equipment"},
       { title: "Inventory", page:"/equipmentInventory"},
    ]

  return (
    <div 
    style={{position:"fixed",width:"75px", padding:"105px 8px 10px 8px",color:"black", backgroundColor:"lightgray", minHeight:"100vh", borderRight:"0.5px solid lightgray", display:"flex", flexDirection:"column", gap:"30px",
  }}
    >
        { sideBarAbricanUtils.map((item, i)=>(
          <div key={i} 
          onClick={()=> navigate(item.page)}
           style={{textAlign:"start", textWrap:"wrap", cursor:"pointer", fontWeight:"600", backgroundColor:"white", padding:"5px", border:"1px solid lightgray", boxShadow:"1px 1px 7px 0px",
           borderRadius:"5px",
           fontSize:"13px" }}>
              {item.title}
          </div>
        ))}

      
    </div>
  )
}

export default SideBarAbrican
