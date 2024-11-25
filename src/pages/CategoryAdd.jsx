
import React, { useState } from 'react';
import "../css/CategoryAdd.css";
import { Form } from 'react-router-dom';
import { postData } from '../services/fetchNodeServices';
import Loder from '../Component/loder';

const CategoryAdd = () => {
    const [categoryname,setCategoryName]=useState('')
    const [image,setImage]=useState({url:'',bytes:''})
    const [loderstatus,setLoderStatus]=useState(false)

    const handleIcon=(event)=>{
        setImage({url:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]})    
       }

       const validation=()=>{
        var submitRecord=true
         if(!categoryname)
         {
            submitRecord=false
         }
           
         if(!image.url)
         {
            submitRecord=false
         }
        return submitRecord
       }

       const handleSubmit= async()=>{
        var error=validation()
       if(error)
       {
       
        setLoderStatus(true)
       try{   
        var formData = new FormData()   

        formData.append("categoryname",categoryname)
        formData.append("image",image.bytes)
        const result = await postData("category/add_new_category",formData)
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<:",result)
       
        if(result?.status)
        {   
            setLoderStatus(false)
            alert(result?.message)
            
        }else{
            setLoderStatus(false)
            alert(result?.message)
        }
    }catch(e){
     console.log("88888888888888888888:",e)
    }    
    
    }
       else{
        alert("Please Fill All The Fields...")
       }
    }


    
      
      
       
    return (
        <div className='add-data-form-main-container'>
            <div className='useradd-upper-container' style={{width:"30%",height:"30vh"}}>
            <div className='useradd-second-container'><input className='useradd-input' style={{width:"40%"}} type='text' placeholder='Category Name' onChange={(e)=>setCategoryName(e.target.value)}/><input className='useradd-input' type='file'accept="images/*" multiple onChange={handleIcon}/></div>
            <div className='useradd-second-container' style={{marginTop:"30px"}}> 
            <div className='submit-btn-category' style={{width:"70%"}}   onClick={handleSubmit}>{loderstatus?<Loder/>:<span>Submit</span>}</div>
                </div>  
               
            </div>
            
        </div>
    );
};

export default CategoryAdd;