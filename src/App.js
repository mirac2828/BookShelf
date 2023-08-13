
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import api from "./Api/api";
import urls from "./Api/urls";


import AddBooks from "./Pages/Book/AddBooks";
import AddCategory from "./Pages/Category/AddCategory";
import Books from "./Pages/Book/Books";
import Category from "./Pages/Category/Category";
import EditBook from "./Pages/Book/EditBook";
import Home from "./Pages/Home";
import ListBooks from "./Pages/Book/ListBooks";
import ListCategories from "./Pages/Category/ListCategories";
import ActionTypes from "./Redux/Actions/ActionTypes";
import EditCategory from "./Pages/Category/EditCategory";

function App() {
  const {bookState,categoryState}=useSelector(state=>state)
  
  const dispatch=useDispatch()
  useEffect(()=>{  
    api.get(urls.books)  
    .then((res)=>{ 
     dispatch({type:ActionTypes.Books.GET_BOOKS,payload:res.data})   } )
    .catch(()=>{} )
    api.get(urls.categories)
    .then((res)=>{
       dispatch({type:ActionTypes.Categories.GET_CATEGORIES,payload:res.data}) 
     
    }
    
    )
    .catch((err)=> console.log(err)) 




  },[] )
   if(bookState.success===false||categoryState===false) return null



  return (
   <Routes>
    <Route path="/" element ={<Home/> }   />
    <Route  path="/books"   element={<Books/>}  >
       <Route index={true}  element={<ListBooks/>} />
       <Route path="add-book" element={<AddBooks/>} />
       <Route path="edit-book/:bookId"  element={<EditBook/> }  />
    </Route>
    <Route path="/category" element={<Category/>} >
      <Route  index={true} element={<ListCategories/>} />
      <Route  path="add" element={<AddCategory/>} />
      <Route  path="edit-category/:id" element={<EditCategory/>} />
    




    </Route>
    



   </Routes>
      
   

     
   
  );
}

export default App;
