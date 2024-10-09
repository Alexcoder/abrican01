// import { useState } from "react";

function Hooks(){

    //pagination
    const pagination=(array,itemsPerPage, page)=>{
        const numberOfPages = Math.ceil(array.length/itemsPerPage)
        const totalItems = array.length
        const lastIndex = itemsPerPage * page;
        const firstIndex= lastIndex-itemsPerPage;
        const serialNumberFactor = (page*itemsPerPage)-itemsPerPage
        return{ 
            firstIndex, 
            lastIndex,
            serialNumberFactor : serialNumberFactor+1,
            totalItems,
            numberOfPages,
        }};

    return{
     pagination,

    };
};

export default Hooks;