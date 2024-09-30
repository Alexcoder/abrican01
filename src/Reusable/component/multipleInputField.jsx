import React from 'react';
import "../styles/multipleInputField.css";

const MultipleInputField = ({data, onChange, onClick, buttonLabel, title, disabled, }) => {

    return(
        <div 
        className='multipleInputFieldContainer'>
        <h3 style={{marginBottom:""}}>{title}</h3>
        <main            
        className='multipleInputFieldWrapper'>
            {
               data.map((item, i)=>(
                    <input
                        key={i}
                        onChange={onChange} 
                        placeholder={item.placeholder}
                        name={item.name}
                        value={item.value}
                        disabled={disabled}
                        style={{outline:"none",padding:"5px", border:"1.5px solid darkgray", }}
                         />                       
                    ))              
            }
        <button
           onClick={onClick}
           style={{
            padding:"10px", 
            backgroundColor:"blue", 
            border:"none", 
            color:"white",
            borderRadius:"2px"
            }}> 
           {buttonLabel} 
         </button>

        </main>
        </div>

        )   
}

export default MultipleInputField
