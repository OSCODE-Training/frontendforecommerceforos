import { useEffect, useState } from "react";
import ShowTable from "../Component/ShowTable";
import { getData } from "../services/fetchNodeServices";




 const DisplayUserDaata=()=>{
    // const [data,setData]=useState([{"name":'ajay',"password":"ajay@123","emailid":"ajaysikata@gmail.com","address":"gram post sikhata","phoneno":6261448735,"role":"user","picture":'https://p.kindpng.com/picc/s/112-1127797_srikrishna-shri-krishna-png-hd-transparent-png.png'},{"name":'ajay',"password":"ajay@123","email":"ajaysikata@gmail.com","address":"gram post sikhata","phoneno":6261448735,"role":"user","picture":'aa.png'},{"name":'ajay',"password":"ajay@123","email":"ajaysikata@gmail.com","address":"gram post sikhata","phoneno":6261448735,"role":"user","picture":'aa.png'},{"name":'ajay',"password":"ajay@123","email":"ajaysikata@gmail.com","address":"gram post sikhata","phoneno":6261448735,"role":"user","picture":'aa.png'}])
    const [data,setData]=useState([])

    const fetchData=async()=>{
        const result  = await getData('user/get_all_user')
        setData(result.data)
        }
      
        useEffect(function(){
            fetchData()
        },[])


    return(<>
    <ShowTable data={data}/>
    </>)
}

export default DisplayUserDaata;