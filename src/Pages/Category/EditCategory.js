import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header'
import "../../styles/editCategory.css"
import urls from '../../Api/urls'
import api from "../../Api/api"
import ActionTypes from '../../Redux/Actions/ActionTypes'

const EditCategory = () => {
  const navigate=useNavigate()
  
    const categoryState=useSelector(state=>state.categoryState)
    const params=useParams()
    const dispatch=useDispatch()
   
    var myCategory=categoryState?.category?.find(item=>item.id===params.id)
    const[text,setText]=useState(myCategory?.name)
    const newCategory={name:text,
    id:params.id}
  return (

   <><Header/>
   
    <div  className='editCategory'>
      
    
   <div className='d-flex gap-2 flex-column  mt-5 align-items-center justify-content-center'>
<label>  Category Name</label>
<input value ={text}  onChange={(e)=> setText(e.target.value)} />


   </div>
 <div> <button onClick={(e)=>{e.preventDefault()
 api.put(`${urls.categories}/${params.id}`,newCategory)
 .then(()=> {dispatch({type:ActionTypes.Categories.EDIT_CATEGORIES,payload:newCategory})   }   )
 

navigate("/category")

} } >Edit</button> </div>
  
  
  
  </div>
   
   
   </>
   
  )
}

export default EditCategory