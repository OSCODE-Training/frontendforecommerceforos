import { useState } from "react";
import '../css/ShowTable.css'
import {FaUserEdit} from "react-icons/fa"
import { MdDelete } from "react-icons/md";

const ShowTable=({data})=>{


    const showData=()=>
    {
        return data.map((item)=>{
            return <div className="showtable-secon-container">
                <div><span className="space-between-to-icon-in-show-table"><FaUserEdit style={{cursor:"pointer"}}/></span><MdDelete style={{cursor:"pointer"}}/></div>
                
                <div>{item.name?item.name:item.categoryname}</div>
                <div>{item?.password}</div>
                <div>{item?.emailid}</div>
                <div>{item?.address}</div>
                <div>{item?.phoneno}</div>
                <div>{item?.role}</div>
                <div><img src={item.picture} width={"50px"} style={{borderRadius:"50%"}}/>
                <div className="edit-btn-in-show-table">Edit Picture</div>
                </div>
                </div>
        })
    }
    return(<div className="showtable-main-container">
         {showData()}
    </div>)
}


export default ShowTable;