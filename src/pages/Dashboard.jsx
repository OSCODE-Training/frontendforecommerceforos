import React, { useEffect, useState } from 'react';
import Box from '../Component/Box';
import '../css/Dashboard.css'
import { getData } from '../services/fetchNodeServices';
const Dashboard = () => {
    const [totalcategory,setTotalCategory]=useState()
    const [totaluser,setTotalUser]=useState()

    const fetchData=async()=>{
        const category  = await getData('categoryu/get_all_category')
        setTotalCategory(category?.data.length)

        const user  = await getData('user/get_all_user')
        setTotalUser(user?.data.length)
        }
      
        useEffect(function(){
            fetchData()
        },[])
    return (
        <div className='main-container-dashboard'>
            <div className='second-container-dashboard'>
            <div style={{width:"33.33%"}}><Box heading={"USERS"} digit={totaluser}/></div>
            <div style={{width:"33.33%"}}><Box heading={"CATEGORY"} digit={totalcategory}/></div>
            <div style={{width:"33.33%"}}><Box heading={"PRODUCT"} digit={"20"}/></div>
            </div>

            <div className='third-container-dashboard'>
            <div style={{width:"33.33%"}}><Box heading={"ORDER"} digit={"20"}/></div>
            <div style={{width:"33.33%"}}><Box heading={"TOTAL SALE"} sign={"true"} digit={"200"}/></div>
            <div style={{width:"33.33%"}}><Box heading={"TODAY SALE"} sign={"true"} digit={"200"}/></div>

            </div>
        </div>
    );
};

export default Dashboard;