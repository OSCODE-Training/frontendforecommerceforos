import React, { useEffect, useState } from 'react';
import "../css/UserAdd.css"
import { getData, postData } from '../services/fetchNodeServices';

const ProductAdd = () => {
    const [allcategorydata,setAllCategoryData]=useState([])
    const [categoryid,setCategoryId]=useState('')
    const [productname,setProductName]=useState('')
    const [description,setDescription]=useState('')
    const [price,setPrice]=useState()
    const [image,setImage]=useState({url:'',bytes:''})

    const fetchData=async()=>{
        const result  = await getData('category/get_all_category')
        setAllCategoryData(result.data)
        }
      
        useEffect(function(){
            fetchData()
        },[])

        const validation=()=>{
            var submitRecord=true
             if(!categoryid)
             {
                submitRecord=false
             }
             if(!productname)
                {
                   submitRecord=false
                }
            if(!description)
             {
               submitRecord=false
             }
            if(!price)
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
            formData.append("categoryid",categoryid)
            formData.append("productname",productname)
            formData.append("description",description)
            formData.append("price",price)
            formData.append("image",image.bytes)
            const result = await postData("product/add_new_product",formData)
            alert(result.message)
               }
           else{
            alert("no")
           }
        }


        const handleIcon=(event)=>{
            setImage({url:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]})    
           }
    return (
        <div className='add-data-form-main-container'>
            <div className='useradd-upper-container'>
            <div className='useradd-second-container' ><select className='useradd-input'  onChange={(e)=>setCategoryId(e.target.value)} defaultValue="">
                <option value="" disabled>- Select Category Name -</option>
                {allcategorydata.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.categoryname}
                </option>
              ))}
                </select><input className='useradd-input' type='text' onChange={(e)=>setProductName(e.target.value)} placeholder='Product Name'/></div>
            <div className='useradd-second-container'>
            <input className='useradd-input' type='area' onChange={(e)=>setDescription(e.target.value)} placeholder='Description'/>
                <input className='useradd-input' type='number'onChange={(e)=>setPrice(e.target.value)} placeholder='Price'/></div>
          
            <div className='useradd-second-container'> 
            <input className='useradd-input' type='file' accept="images/*" multiple onChange={handleIcon} /><input className='useradd-input' type='submit' onClick={handleSubmit} value="submit"/>
                </div>  
            </div>
        </div>
    );
};

export default ProductAdd;