import { useEffect, useState } from "react";
import ShowTableCategory from "../Component/ShowTableCategory";
import { getData } from "../services/fetchNodeServices";




 const DisplayCategoryData=()=>{
    // const [data,setData]=useState([{"categoryname":'ajay',"picture":'https://p.kindpng.com/picc/s/112-1127797_srikrishna-shri-krishna-png-hd-transparent-png.png'},{"categoryname":'ajay',"picture":'aa.png'}])

    const [data,setData]=useState([])

    const fetchData=async()=>{
        const result  = await getData('category/get_all_category')
        setData(result?.data)
        }
      
        useEffect(function(){
            fetchData()
        },[])
    return(<>
    <ShowTableCategory data={data}/>
    </>)
}

export default DisplayCategoryData;