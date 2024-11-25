import '../css/ShowTable.css'
import {FaUserEdit} from "react-icons/fa"
import { MdDelete } from "react-icons/md";
import { deleteData, serverURL } from '../services/fetchNodeServices';

const ShowTableCategory=(props)=>{


    const handleDelete=async(item)=>{
        
            if (window.confirm("Are you sure you want to delete this category item?")) {
             const result = await deleteData("category/delete_category",{"categoryid":item._id})
             props.setRefresh(!props.refresh)  
             alert(result?.message)
        
      }
    }



    const showData=()=>
    {
        if(props?.data?.length>0){
        return props?.data?.map((item)=>{
            return <div className="showtable-secon-container">
                <div><span className="space-between-to-icon-in-show-table"><FaUserEdit style={{cursor:"pointer"}}/></span><MdDelete style={{cursor:"pointer"}} onClick={()=>handleDelete(item)}/></div>
                
                <div>{item.categoryname}</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div><img src={`${serverURL}/images/${item.image}`} width={"50px"} style={{borderRadius:"50%"}}/>
                <div className="edit-btn-in-show-table">Edit Picture</div>
                </div>
                </div>
        })
    }else
    {
       return(<h2>There is no category .</h2>)
    }
    }
    return(<div className="showtable-main-container">
         {showData()}
    </div>)
}


export default ShowTableCategory;