import React, { useState } from 'react';
import "../css/UserAdd.css"
import { postData } from '../services/fetchNodeServices';

const UserAdd = () => {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [address,setAddress]=useState('')
    const [phoneno,setPhoneNo]=useState('')
    const [role,setRole]=useState('')
    const [picture,setPicture]=useState({url:'',bytes:''})
    // const []

    const handleIcon=(event)=>{
        setPicture({url:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]})
        // handleError(true,'icon','')
    
       }

       const validation=()=>{
        var submitRecord=true
         if(!name)
         {
            submitRecord=false
         }
         if(!password)
         {
            submitRecord=false
         }
         if(!email)
            {
               submitRecord=false
            }
        if(!address)
        {
            submitRecord=false
         }  
         if(!phoneno)
            {
               submitRecord=false
            } 

            if(!role)
                {
                   submitRecord=false
                }    
         if(!picture.url)
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
        formData.append('username',name || "")  
        formData.append('password',password)  
        formData.append('emailid',email)  
        formData.append('address',address)  
        formData.append('phoneno',phoneno)  
        formData.append('picture',picture.bytes)  
        formData.append('role',role)  
        // console.log("aaaaaaaaeeeeeeeeeeeeeeeeeee:",)
        // var body={"username":name,"password":password,"emaildid":email,"address":address,"phoneno":phoneno,"picture":picture.bytes,"role":role}
        var result=await postData('user/create_user',formData)
        alert(result?.message)
       }else{
        alert("Please Fill All The Fields")
       }

    }   

    console.log(name+" "+password+" "+email+" "+address+" "+phoneno+" "+role+" "+picture.url)
   
    return (
        <div className='add-data-form-main-container'>
            <div className='useradd-upper-container' >
            <div className='useradd-second-container'><input onChange={(e)=>setName(e.target.value)} className='useradd-input' type='text' placeholder='Name'/><input className='useradd-input' onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password'/></div>
            <div className='useradd-second-container'>
            <input className='useradd-input' onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email'/>
                <input className='useradd-input' onChange={(e)=>setAddress(e.target.value)} type='address' placeholder='Address'/></div>
            <div className='useradd-second-container'>
            <input className='useradd-input' onChange={(e)=>setPhoneNo(e.target.value)} type='number' placeholder='Phone Number'/>
            <select className='useradd-input' onChange={(e)=>setRole(e.target.value)}><option value="">- Select Role -</option><option>User</option><option>Admin</option></select>
                </div>
            <div className='useradd-second-container'> 
            <input className='useradd-input' type='file' accept="images/*" multiple onChange={handleIcon}/><input style={{cursor:"pointer"}} onClick={handleSubmit} className='useradd-input' type='submit' value="submit"/>
                </div>  
            </div>
        </div>
    );
};

export default UserAdd;