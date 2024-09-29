import React from 'react'

const Header = ({item, i}) => {

  return (
    <div className='headerContainer'>
                <div className="itemBody">
                    <div className="item item1" ><strong>Observer Name:</strong>  {item.observerName}</div>
                    <div className="item item1"><strong>Segment:</strong> {item.segment}</div>
                    <div className="item"><strong>ObservationDate:</strong> {item.onbservationDate}</div>
                    <div className="item"><strong>Site Name:</strong>  {item.siteName}</div>
                    <div className="item"><strong>Observation Time:</strong> {item.observationTime}</div>
                    <div className="item"><strong>Contractor Name:</strong>  {item.contractorName}</div>
                    <div className="item"><strong>Observation Duration:</strong> {item.observationDuration}</div>
                    <div className="item"><strong>Client Name:</strong>  {item.clientName}</div>
                </div>
                <div style={{backgroundColor:"blue", color:"white", padding:"4px", fontSize:"12px"}}>Description and Details of Observation</div>
                <div style={{textAlign:"start", backgroundColor:"white", color:"black", padding:"4px", fontSize:"13px"}}>
                  <strong>Brief Description:</strong>  {item.briefDescription}
                </div>
    </div>
  )
}

export default Header
