// import { useState } from "react";
import axios from "axios";

function Hooks(){
    const api = axios.create({
        baseURL : "http://localhost:8000",
    });

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

        const saveToLocalStorageReact=(key, value)=> localStorage.setItem( key, JSON.stringify(value));
        const getFromLocalStorageReact=(key)=> JSON.parse(localStorage.getItem(key));

        //API REQUEST HOOKS
        const getRequest=(route)=> api.get(route)
        const getRequestWithQuery=(routeWithQuery)=>api.get(routeWithQuery)
        const postRequest=(route, data)=> api.post(route, data )
        const updateRequest=(routeWithParams)=> api.patch(routeWithParams) 
        const deleteRequest=(routeWithParams)=> api.delete(routeWithParams) 
        

    return{
     api,
     getRequest,
     postRequest,
     deleteRequest,
     updateRequest,
     getRequestWithQuery,
     pagination,
     saveToLocalStorageReact,
     getFromLocalStorageReact,

    };
};

export default Hooks;