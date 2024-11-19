import React, { useEffect, useState } from 'react';
import { getData } from '../services/fetchNodeServices';
import DisplayOrderListData from './DisplayOrderListData';
const orderList = () => {
    const [data,setData]=useState([])

    const fetchData=async()=>{
        const result  = await getData('order/users-orders')
        setData(result?.data)
        }
      
        useEffect(function(){
            fetchData()
        },[])
    return (
        <>
        <DisplayOrderListData data={data}/>
        </>
    );
};

export default orderList;

