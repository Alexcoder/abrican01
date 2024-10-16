import { useSelector } from 'react-redux';

const HomePageHook =()=>{
    const {equipment}= useSelector(state=> state.equipment)

    const data = [
        { title : "Create Profile",  page:"/createProfile", count: "" },
        { title : "Personnel", page:"/personnel", count: "4900"},
        { title : "StopCard", page:"/stopCard", count: "89" },
        { title : "Equipment", page:"/equipment", count: equipment?.length ? equipment?.length : "6"},
        // {title : "PPE Collected", page:"/ppeCollected", count: "180"},
        // { title : "Services", page:"/services", count: "6" },
        // { title : "Jobs", page:"/jobs" count: "34" },
        // { title : "Violations", page:"/violations", count: "347" },
    ];

    return{
        data,
    }
}

export default HomePageHook;