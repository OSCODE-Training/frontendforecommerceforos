import '../css/ShowTable.css'
import {FaUserEdit} from "react-icons/fa"
import { MdDelete } from "react-icons/md";

const ShowTableProduct=({data})=>{


    const showData=()=>
    {
        return data.map((item)=>{
            return <div className="showtable-secon-container">
                <div><span className="space-between-to-icon-in-show-table"><FaUserEdit style={{cursor:"pointer"}}/></span><MdDelete style={{cursor:"pointer"}}/></div>
                
                <div>{item.categoryid}</div>
                <div>{item.productname}</div>
                <div>{item.description}</div>
                <div>{item.price}</div>
                <div></div>
                <div></div>
                <div><img src={item.image} width={"50px"} style={{borderRadius:"50%"}}/>
                <div className="edit-btn-in-show-table">Edit Picture</div>
                </div>
                </div>
        })
    }
    return(<div className="showtable-main-container">
         {showData()}
    </div>)
}


export default ShowTableProduct;