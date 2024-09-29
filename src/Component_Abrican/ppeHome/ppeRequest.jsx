import React, {useState} from 'react'

const PpeHome = () => {
  const[submit , setSubmit] = useState(false)
  
  const ppeRequestData ={
    personnelName : "Personnel Name",
    itemRequested : "Item Requested",
    itemSize : "Item Size",
    requestDate: Date(),
  };
  const[requestData , setRequestData] = useState(ppeRequestData)

  const productionCheck ={
    clickStatus: submit? "Submitted" : "Not Submitted",
  }

  return (
    <main style={{backgroundColor:"darkgray", height:"100vh", padding:"10px 5px"}}>
      <h2>ABRICAN PERSONNEL PPE REQUEST </h2>
     <div style={{marginTop: "1px", display:"flex", flexDirection:"column", gap:"15px", padding:"10px 30px",}}>
        <select style={{padding:"5px", border:"1.5px solid darkgray"}}>
          <option>Personnel Name</option>
          <option>Agboh Ifeanyi Alexander</option>
          <option>Uduak Thompson Ebong</option>
        </select>
        <select style={{padding:"5px", border:"1.5px solid darkgray"}}>
          <option>Item requested</option>
          <option>Agboh Ifeanyi Alexander</option>
          <option>Uduak Thompson Ebong</option>
        </select>
        <select style={{padding:"5px", border:"1.5px solid darkgray"}}>
          <option>Size</option>
          <option>Agboh Ifeanyi Alexander</option>
          <option>Uduak Thompson Ebong</option>
        </select>
        <button
        onClick={()=> setSubmit((prev)=> !prev)}
        style={{padding:"10px", backgroundColor:"blue", border:"none", color:"white"}}> Request </button>
     </div>
      {productionCheck.clickStatus}
    </main>
  )
}

export default PpeHome

