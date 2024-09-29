// import { useState } from "react";
import { useGlobalState } from "../../State/context/Context";


function Utils(){

  const {personnelData, setPersonnelData} = useGlobalState()

    function handlePesonnelInputChange(e){
        setPersonnelData({
          ...personnelData,
          [e.target.name] : e.target.value
        })
      }; 
    
    const utilsCreatePersonnelProfile = [
        { placeholder: "Personnel Name", name: "personnelName", value: personnelData.personnelName},
        { placeholder: "Department", name: "department", value: personnelData.department},
        { placeholder: "Coverall Size", name: "coverallSize", value: personnelData.coverallSize },
        { placeholder: "Boot Size", name: "bootSize", value: personnelData.bootSize},
        { placeholder: "Date Joined", name:"dateJoined", value: personnelData.dateJoined},
        { placeholder: "Employee Number", name:"employeeNumber", value: personnelData.employeeNumber},
    ];

    const personnelListUtils =[
 
      {
        name: "Alexander Ifeanyi Agboh",
        department: "Cementing",
        position: "Cementing Supervisor",
        coverallSize : "XL",
        bootSize:"46",
      },
      {
        name: "Uduak Ebong Thompson",
        department: "Cementing",
        position: "Cementing Supervisor",
        coverallSize : "XL",
        bootSize:"44",
      },
      {
        name: "Alali Wisdom Chimekenim",
        department: "Cementing",
        position: "Cell Leader",
        coverallSize : "XL",
        bootSize:"45",
      },
      {
        name: "Ghulam Mustafa",
        department: "Cementing",
        position: "Cementing Supervisor",
        coverallSize : "XL",
        bootSize:"46",
      },
      {
        name: "Johnson",
        department: "Cementing",
        position: "Maintainance Manager",
        coverallSize : "XL",
        bootSize:"42",
      },
      {
        name: "Uduak Ebong Thompson",
        department: "Cementing",
        position: "Cementing Supervisor",
        coverallSize : "XL",
        bootSize:"44",
      },
      {
        name: "Rudy",
        department: "Cementing",
        position: "Cementing Supervisor",
        coverallSize : "XL",
        bootSize:"42",
      },
      {
        name: "Personnel",
        department: "Department",
        position: "Position",
        coverallSize : "XL",
        bootSize:"42",
      },
      {
        name: "Personnel",
        department: "Department",
        position: "Position",
        coverallSize : "XL",
        bootSize:"42",
      },
      {
        name: "Personnel",
        department: "Department",
        position: "Position",
        coverallSize : "XL",
        bootSize:"42",
      },
      {
        name: "Personnel",
        department: "Department",
        position: "Position",
        coverallSize : "XL",
        bootSize:"42",
      },
      {
        name: "Personnel",
        department: "Department",
        position: "Position",
        coverallSize : "XL",
        bootSize:"42",
      },
      {
        name: "Personnel",
        department: "Department",
        position: "Position",
        coverallSize : "XL",
        bootSize:"42",
      },
      {
        name: "Personnel",
        department: "Department",
        position: "Position",
        coverallSize : "XL",
        bootSize:"42",
      },
      {
        name: "Personnel",
        department: "Department",
        position: "Position",
        coverallSize : "XL",
        bootSize:"42",
      },
      {
        name: "Personnel",
        department: "Department",
        position: "Position",
        coverallSize : "XL",
        bootSize:"42",
      },
      {
        name: "Personnel",
        department: "Department",
        position: "Position",
        coverallSize : "XL",
        bootSize:"42",
      },
      {
        name: "Personnel",
        department: "Department",
        position: "Position",
        coverallSize : "XL",
        bootSize:"42",
      },
      {
        name: "Personnel",
        department: "Department",
        position: "Position",
        coverallSize : "XL",
        bootSize:"42",
      },
      {
        name: "Personnel",
        department: "Department",
        position: "Position",
        coverallSize : "XL",
        bootSize:"42",
      },
      {
        name: "Personnel",
        department: "Department",
        position: "Position",
        coverallSize : "XL",
        bootSize:"42",
      },
      {
        name: "Personnel",
        department: "Department",
        position: "Position",
        coverallSize : "XL",
        bootSize:"42",
      },
      {
        name: "Personnel",
        department: "Department",
        position: "Position",
        coverallSize : "XL",
        bootSize:"42",
      },
    ]
    
      console.log(personnelData)

      return{
        handlePesonnelInputChange,
        utilsCreatePersonnelProfile,
        personnelListUtils,
      }
};

export default Utils

