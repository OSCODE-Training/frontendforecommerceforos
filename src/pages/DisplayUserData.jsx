import { lazy, Suspense, useEffect, useState } from "react";
const ShowTable = lazy(()=>import("../Component/ShowTable"))
import { deleteData, getData } from "../services/fetchNodeServices";
import Loder from "../Component/loder";

 const DisplayUserDaata=()=>{
    const [data,setData]=useState([])
    const [refresh,setRefresh]=useState(false)

    const fetchData=async()=>{
        const result  = await getData('user/get_all_user')
        setData(result.data)
        }
        

        
        useEffect(function(){ fetchData()  },[])
        useEffect(() => {
            if (refresh) {
                fetchData();
                setRefresh(false); // Reset refresh state
            }
        }, [refresh]);

    return(<>
    <Suspense fallback={<div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"20px"}}><Loder/></div>}>
    <ShowTable data={data} refresh={refresh} setRefresh={setRefresh}/>
    </Suspense>
    </>)
}

export default DisplayUserDaata;