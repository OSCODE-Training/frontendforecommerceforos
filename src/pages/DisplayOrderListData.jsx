import '../css/ShowTable.css'
import {FaUserEdit} from "react-icons/fa"
import { MdDelete } from "react-icons/md";

const DisplayOrderListData=({data})=>{


    const showData=()=>
    {
        return data?.map((item)=>{
            return <div className="showtable-secon-container">
                <div><MdDelete style={{cursor:"pointer"}}/></div>
                
                <div>{item.categoryid.categoryname}</div>
                <div>{item.productid.productname}</div>
                <div>{item.transactionid}</div>
                <div>{item.quantity}</div>
                <div>{item.createdAt}</div>
                <div></div>
                
                
                </div>
        })
    }
    return(<div className="showtable-main-container">
         {showData()}
    </div>)
}


export default DisplayOrderListData;