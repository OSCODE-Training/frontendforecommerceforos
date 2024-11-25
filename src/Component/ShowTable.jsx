import '../css/ShowTable.css'
import {FaUserEdit} from "react-icons/fa"
import { MdDelete } from "react-icons/md";
import { deleteData, serverURL } from "../services/fetchNodeServices";

const ShowTable=(props)=>{
    
   
    const handleDelete=async(item)=>{
        if(item?.role=="admin" || item?.role=="user")
        {
            if (window.confirm("Are you sure you want to delete this item?")) {
             const result = await deleteData("user/delete_user",{"userid":item._id})
             props.setRefresh(!props.refresh)  
             alert(result?.message)
        }
      }
    }
  

    const showData=()=>
    {   if(props?.data?.length>0){
        return props?.data.map((item)=>{
            return <div className="showtable-secon-container">
                <div><span className="space-between-to-icon-in-show-table"><FaUserEdit style={{cursor:"pointer"}}/></span><MdDelete style={{cursor:"pointer"}} onClick={()=>handleDelete(item)}/></div>
                
                <div>{item.name?item.name:item.categoryname}</div>
                <div>{item?.password}</div>
                <div>{item?.emailid}</div>
                <div>{item?.address}</div>
                <div>{item?.phoneno}</div>
                <div>{item?.role}</div>
                <div><img src={`${serverURL}/images/${item.picture}`} width={"50px"} style={{borderRadius:"50%"}}/>
                <div className="edit-btn-in-show-table">Edit Picture</div>
                </div>
                </div>
        })
      }else
     {
        return(<h2>There is no user .</h2>)
     }
    }
    return(<div className="showtable-main-container">
         {showData()}
    </div>)
}


export default ShowTable;