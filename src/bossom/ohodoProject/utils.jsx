
// import React from 'react'

function Utils(){
    const donation =[
        //OHODO PROJECT
        {
            title          : "ohodoProject",  
            amount         : Number(700000),
            date           : "Wed Oct 10 2024 12:33:31 GMT+0300 (Arabian Standard Time)",
            // date           : "10-October-2024",
            type           : "expense",
        },
        
        //OTHER WELFARE
        {
            title          : "family",  
            amount         :  Number(400000),
            date           : "Wed Oct 01 2024 12:33:31 GMT+0300 (Arabian Standard Time)",
            type           : "expense",
        },
        //HOUSE
        {
            title          : "welfare",  
            amount         :  Number(300000),
            date           : "Wed Oct 01 2024 12:33:31 GMT+0300 (Arabian Standard Time)",
            type           : "expense",
        },
        
    ];
    function sum(projectType){
        const filterSum = donation.filter((item)=> item.title.includes(projectType))
        const total = filterSum.reduce((acc, x)=> (Number(acc) + Number(x.amount)), 0);
       console.log(filterSum)
        return (
            <div style={{textTransform:"capitalize"}}>
                <strong>{projectType}</strong>    NGN <span>{total}</span>
            </div>
        )
    };

  return{
    donation,
    sum,
  }
}

export default Utils
