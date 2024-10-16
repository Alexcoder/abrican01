import React from 'react';
import "../styles/multipleInputField.css";

const MultipleInputField = ({data, onChange, onSubmit,handleClose, buttonLabel, title, disabled, }) => {

    return(
        <div 
        className='multipleInputFieldContainer'>
        {/* <h3 style={{marginBottom:""}}>{title}</h3> */}
        <main            
        className='multipleInputFieldWrapper'>
            <div >
              <strong onClick={()=>handleClose()} style={{float:"right", color:"red", cursor:"pointer"}}>X</strong>
              <strong style={{color:"black"}}>{title}</strong>
            </div>
            {
               data.map((item, i)=>(
                <span key={i} style={{display:"grid", placeItems:"start", backgroundColor:"", padding:"2px", }}>
                    <div style={{color:"black", fontWeight:"650", fontSize:"13px" }}>{item.placeholder}</div>
                    <input
                        // key={i}
                        onChange={onChange} 
                        placeholder={item.placeholder}
                        name={item.name}
                        value={item.value}
                        disabled={disabled}
                        style={{outline:"none",padding:"8px", border:"1.5px solid darkgray", width:"95%", backgroundColor:"lightgray"}}
                         />                       
                </span>
                    ))              
            }
        {true && 
        <div style={{marginTop:"10px"}}>
          <button
             onClick={onSubmit}
             style={{
               padding:"10px", 
               backgroundColor:"blue", 
               border:"none", 
               color:"white",
               borderRadius:"2px",
               width:"100%"
            }}> 
           {buttonLabel} 
         </button>
        </div>
          }

        </main>
        </div>

        )   
}

export default MultipleInputField
