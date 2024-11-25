import { useEffect, useState } from "react";
import ShowTableCategory from "../Component/ShowTableCategory";
import { getData } from "../services/fetchNodeServices";




 const DisplayCategoryData=()=>{
    // const [data,setData]=useState([{"categoryname":'ajay',"picture":'https://p.kindpng.com/picc/s/112-1127797_srikrishna-shri-krishna-png-hd-transparent-png.png'},{"categoryname":'ajay',"picture":'aa.png'}])

    const [data,setData]=useState([])
    const [refresh,setRefresh]=useState(false)

    const fetchData=async()=>{
        const result  = await getData('categoryu/get_all_category')
        setData(result?.data)
        }
      
        useEffect(function(){
            fetchData()
        },[])
        useEffect(() => {
            if (refresh) {
                fetchData();
                setRefresh(false); // Reset refresh state
            }
        }, [refresh]);
    return(<>
    <ShowTableCategory data={data} refresh={refresh} setRefresh={setRefresh} />
    </>)
}

export default DisplayCategoryData;