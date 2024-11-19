import { useEffect, useState } from "react";
import ShowTableProduct from "../Component/ShowTableProduct";
import { getData } from "../services/fetchNodeServices";




 const DisplayProductData=()=>{
    // const [data,setData]=useState([{"categoryname":'ajay',"productname":"hello","description":"this product is very nice","price":50,"picture":'https://p.kindpng.com/picc/s/112-1127797_srikrishna-shri-krishna-png-hd-transparent-png.png'},{"categoryname":'ajay',"picture":'aa.png'}])

    const [data,setData]=useState([])

    const fetchData=async()=>{
        const result  = await getData('product/get_all_product')
        setData(result?.data)
        }
      
        useEffect(function(){
            fetchData()
        },[])
    return(<>
    <ShowTableProduct data={data}/>
    </>)
}

export default DisplayProductData;