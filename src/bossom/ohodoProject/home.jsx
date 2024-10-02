import React from 'react';
import Utils from './utils';
import TableMap from '../../Reusable/component/tableMap';
import "./home.css";

const Home = () => {
    const { donation, sum } = Utils();

    const display=(item,i)=>{       
        return(
          <>
                 <td>{i+1}</td>
                 <td>{item.title}</td>
                 <td>{item.date.slice(0, 15)}</td>
                 <td>{item.amount}</td>
        </>
      )
    };
  

  return (
    <main className="home">
        <TableMap
         data={[donation,[]]}
         equipment={"BOSSOM"} 
         headers={["SN","TITLE", "DATE", "AMOUNT"]} 
         renderItems={(item,i)=> display(item,i)}
         handleAddNew={()=> true}
        />
         {sum("ohodoProject")}
         {sum("family")}
         {sum("welfare")}
    </main>
  )
}

export default Home
