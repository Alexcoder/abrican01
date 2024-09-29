import React from 'react'

const MultipleInputField = ({data, onChange, onClick, buttonLabel, title, disabled, }) => {

    return(
        <div 
        style={{
            backgroundColor:"rgba(0, 0, 0, 0.6)",
            position:"fixed",
            top:"0",
            left:"0",
            right:"0",
            bottom:"0",
            width:"100%", 
            display:"grid", 
            alignItems:"",
            placeItems:"center",
            }}>
        <h3 style={{marginBottom:""}}>{title}</h3>
        <main            
           style={{
            width:"30%",
            height:"fitContent",
            position:"fixed",
            top:"60px",
            backgroundColor:"rgba(255, 255, 50, 0.2)",
            // boxShadow:"0px 0px 5px 3px ",
            outline:"none",padding:"15px", 
            border:"1px solid darkgray", 
            display:"flex", 
            flexDirection:"column",
            gap:"20px"}}>
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
