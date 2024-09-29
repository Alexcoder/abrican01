import React, {useState} from 'react';
// import Utils from './utilsCreatePersonnelProfile';
import MultipleInputField from '../../Reusable/component/multipleInputField';

const CreatePersonnelProfile = () => {
  // const { 
        //  utilsCreatePersonnelProfile,
        //  handlePesonnelInputChange,
    // } = Utils()
  
  const initialState={
    observerName        : "",
    segment             : "",
    observationDate     : "",
    siteName            : "",
    observationTime     : "",
    contractorName      : "",
    observationDuration : "",
    clientName          : "",
  };

  // 'https://github.com/Alexcoder/abrican01.git
  const[stopCard , setStopCard] = useState(initialState);
  const[submit , setSubmit] = useState(true);
  function handleSubmit(){
    setSubmit(!submit)
  };

  const data = [
    {
      name: "observerName",
      placeholder: "Observer Name",
      value: stopCard.observerName,
    },
    {
      name: "segment",
      placeholder: "Segment",
      value: stopCard.segment,
    },
    {
      name: "observationDate",
      placeholder: "Observation Date",
      value: stopCard.observationDate,
    },
    {
      name: "siteName",
      placeholder: "SiteName",
      value: stopCard.siteName,
    },
    {
      name: "observationTime",
      placeholder: "Observation Time",
      value: stopCard.observationTime,
    },
    {
      name: "contractorName",
      placeholder: "Contractor Name",
      value: stopCard.contractorName,
    },
    {
      name: "observationDuration",
      placeholder: "Observation Duration",
      value: stopCard.observationDuration,
    },
    {
      name: "clientName",
      placeholder: "Client Name",
      value: stopCard.clientName,
    },
  ];

  const handleChange=(e)=>{
    setStopCard({
      ...stopCard,
      [e.target.name] : e.target.value
    })
  };

  console.log({"stopCard": stopCard})

    



  return (
    <main style={{backgroundColor:"darkgray", minHeight:"100vh", padding:"",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"", textAlign:""}}>
     <div style={{marginTop: "1px", display:"flex", flexDirection:"column", gap:"15px", padding:"10px 30px", width:"40vw"}}>

       <MultipleInputField
        //  title={"CREATE PERSONNEL PROFILE "}
         title={""}
         data={data}
         onChange={handleChange} 
         onClick={()=> handleSubmit()}
         buttonLabel={"Create Profile"}
       />

     </div>
    </main>
  )
}

export default CreatePersonnelProfile

