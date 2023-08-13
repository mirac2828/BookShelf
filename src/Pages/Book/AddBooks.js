import React, { useState } from 'react'
import Header from '../../Components/Header'
import api from "../../Api/api"
import urls from '../../Api/urls'
import ActionTypes from '../../Redux/Actions/ActionTypes'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { upperCase } from '../../Utility'


const AddBooks = () => {
  const categoryState= useSelector(state=>state.categoryState)

    const navigate=useNavigate()
    const[form,setForm]=useState({
      id: String(new Date().getTime()),
      name:"",
        publisher:"",
        price:"",
        categoryId:categoryState?.category[0]?.id})
    
        const dispatch=useDispatch()

  const handleSubmit=(e)=>{e.preventDefault()
  if(form.name==="" || form.price=== "" ||form.publisher==="")
  { alert("Bu alanlar boş bırakılamaz")
      return}
 api.post(urls.books,form)
   .then(()=>{ dispatch({type:ActionTypes.Books.ADD_BOOK,payload:form}) } )
    .catch((err)=>console.log(err))
    console.log(form)
   navigate("/books")}
  return (
    <div><Header/>
     <form  className='mt-5 d-flex justify-content-center flex-column ' >
  <div className="form-group container mb-3">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input value={upperCase(form.name)} onChange={(e)=>setForm({...form,name:e.target.value}) }  type="text"className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
    
  </div>
  <div className="form-group container mb-3">
    <label htmlFor="exampleInput publisher1"> Publisher</label>
    <input value={form.publisher} onChange={(e)=>setForm({...form,publisher:e.target.value}) }  type=" text"className="form-control" id="exampleInput publisher1" placeholder="Publisher"/>
  </div>
  <div className="form-group  container mb-3">
  <label className="form-check-label" htmlFor="exampleCheck1">Price</label>
    <input value={form.price} onChange={(e)=>setForm({...form,price:e.target.value}) }   type="number"className="form-control" id="exampleCheck1"/>
   
  </div>
  <div className="form-group container mb-3">
  
  <select
 

    value={form.categoryId} 
    onChange={(e)=>setForm({...form,categoryId:e.target.value})}  className='form-select'>Category
    {categoryState.category.map(item=>
  
      <option 
       key={item.id} 
       value={item.id}
       >{(item.name)} 
      </option>
  
  )}
  </select>
</div>
  <div className='d-flex justify-content-center'  >
    <button  onClick={ handleSubmit}
    
     type="submit"className="btn btn-primary w-50 d-flex justify-content-center">
        Submit</button> 
        </div>
</form>
    
        
        
        
       </div>
  )
}

export default AddBooks