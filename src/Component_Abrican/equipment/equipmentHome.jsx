import React from 'react';
import ReuseHome from '../Home/reuseHome';

const equipmentHome = () => {

     const equipmentPageData = [
        {
            title : "Cement Unit 03",
            page:"/equipmentInventory",
            count: "",
        },
        {
            title : "Cement Unit 06",
            page:"/equipmentInventory",
            count: "",
        },
        {
            title : "Cement Unit 05",
            page:"/equipmentInventory",
            count: "",
        },
    ]

  return (
    <div>

    <div style={{backgroundColor:"darkgray", width:"100%",display:"grid", justifyItems:"center"}}>
        <ReuseHome
         title={"EQUIPMENT"}
         data={equipmentPageData}
         columns={3}
         
         />
      
    </div>
    </div>
  )
}

export default equipmentHome
