import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import api from '../../Api/api';
import urls from '../../Api/urls';
import Header from '../../Components/Header';
import ActionTypes from '../../Redux/Actions/ActionTypes';

const EditBook = () => {
  const navigate=useNavigate()
    const params=useParams()
    const dispatch=useDispatch()
    const {bookState,categoryState}=useSelector(state=>state)
    const editform= bookState.books.find(item=>item.id===params.bookId)
    const[form,setForm]=useState(editform)
    const HandleForm=(form)=>{
       
         console.log(form)
        api.put(`${urls.books}/${form.id}`,form)
        .then(()=>{
            dispatch({type:ActionTypes.Books.EDIT_BOOK,payload:form})
         })
         navigate("/books")



    }
  return (
    <div>
        <Header/>

     <form  className='mt-5 d-flex justify-content-center flex-column ' >
  <div className="form-group container mb-3">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value}) }  type="text"className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
    
  </div>
  <div className="form-group container mb-3">
    <label htmlFor="exampleInput publisher1"> Publisher</label>
    <input value={form.publisher} onChange={(e)=>setForm({...form,publisher:e.target.value}) }  type=" text"className="form-control" id="exampleInput publisher1" placeholder="Publisher"/>
  </div>
  <div className="form-group  container mb-3">
  <label className="form-check-label" htmlFor="exampleCheck1">Price</label>
    <input value={form.price} onChange={(e)=>setForm({...form,price:e.target.value}) }   type="number"className="form-control" id="exampleCheck1"/>
   
  </div>
  <div className="form-group  container mb-3">
  
  <select
defaultValue={categoryState?.category[0].id}
    value={form.categoryId} 
    onChange={(e)=>setForm({...form,categoryId:e.target.value})}  className='form-select'>Category
    {categoryState?.category?.map(item=>
  
  <option  key={item.id} value={item.id} >{item.name} </option>
  
  )}
  </select>
 
</div>
  <div className='d-flex justify-content-center'  >
    <button  onClick={(e)=> {e.preventDefault()
        HandleForm(form)}}
    
     type="submit"className="btn btn-primary w-50 d-flex justify-content-center">
        Submit</button> 
        </div>
</form>
    
        
        
        
        </div>
  )
}

export default EditBook