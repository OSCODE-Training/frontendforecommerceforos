import { useState } from 'react';
import '../css/Login.css';
import { postData } from '../services/fetchNodeServices';
import { useNavigate } from "react-router-dom";

const Login=()=>{
    var navigate = useNavigate()
    const [mobileno,setMobileNo]=useState()
    const [emaildid,setEmailId]=useState()
    const [password,setPassword]=useState()
    const [role,setRole]=useState()

    const validation=()=>{
        var submitRecord=true
         if(!mobileno)
         {
            submitRecord=false
         }
         if(!emaildid)
            {
               submitRecord=false
            }
        if(!password)
         {
           submitRecord=false
         }
        if(!role)
        {
           submitRecord=false
        }
         
        return submitRecord
       }


    const handleClick=async()=>{
        var error = validation()
        if(error)
        {
        // alert("yes")
        const result = await postData("login/user_admin_login",{phoneno:mobileno,emailid:emaildid,password:password,role:role})
        console.log("YYYYYYYYYYYYYYYYYYYYYYYYY:",result?.data?.role)
        if(result?.data?.role=="admin")
        {
           localStorage.setItem("TOKEN", result.token);
           navigate("/dashboard")
        }
        if(result?.data?.role=="user")
        { 
            alert("User Login Successfully")
        }
        }else
        {
            alert("Please Fill All Fields...")
        }
       
        
    }
    return(<div className="main-container-login">
       <div className='second-container-login'>
        <input type="number" placeholder='Enter Mobile No...' size={"10"} onChange={(e)=>setMobileNo(e.target.value)}/>
        <input type="email" placeholder='Enter Emailid...' onChange={(e)=>setEmailId(e.target.value)}/>
        <input type="password" placeholder='Enter Password...' onChange={(e)=>setPassword(e.target.value)}/>
        <select onChange={(e)=>setRole(e.target.value)}>
            <option value={""} >- Select Role - </option>
            <option value={"user"}>User</option>
            <option value={"admin"}>Admin</option>
        </select>
        <input type="submit" style={{cursor:"pointer"}} value={"submit"} onClick={handleClick}/>

       </div>
    </div>)
}



export default Login;