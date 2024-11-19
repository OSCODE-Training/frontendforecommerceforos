
import React, { useState } from 'react';
import "../css/UserAdd.css"
import { Form } from 'react-router-dom';
import { postData } from '../services/fetchNodeServices';

const CategoryAdd = () => {
    const [categoryname,setCategoryName]=useState('')
    const [image,setImage]=useState({url:'',bytes:''})

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
        var formData = new FormData()   
        formData.append("categoryname",categoryname)
        formData.append("image",image.bytes)
        // for (let [key, value] of formData.entries()) {
        //     console.log(`Key: ${key}, Value: ${value}`);
        // }
        // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxx:",formData)
        const result = await postData("category/add_new_category",formData)
        alert(result.message)
           }
       else{
        alert("no")
       }
    }
       
    return (
        <div className='add-data-form-main-container'>
            <div className='useradd-upper-container' style={{width:"30%",height:"30vh"}}>
            <div className='useradd-second-container'><input className='useradd-input' style={{width:"40%"}} type='text' placeholder='Category Name' onChange={(e)=>setCategoryName(e.target.value)}/><input className='useradd-input' type='file'accept="images/*" multiple onChange={handleIcon}/></div>
            <div className='useradd-second-container' style={{marginTop:"30px"}}> 
            <input className='useradd-input' style={{width:"70%"}} type='submit' value="submit" onClick={handleSubmit}/>
                </div>  
            </div>
        </div>
    );
};

export default CategoryAdd;