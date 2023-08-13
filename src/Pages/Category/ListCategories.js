import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import api from "../../Api/api"
import urls from "../../Api/urls"
import Header from "../../Components/Header";
import ActionTypes from "../../Redux/Actions/ActionTypes";
import { upperCase } from "../../Utility";
import CustomModal from "../CustomModal";

const ListCategories = () => {
  const[willModalOpen,setWillModalOpen]=useState(false)
  const[willDeleteCategory,setWillDeleteCategory]=useState("")
  const dispatch=useDispatch()
  const categoryState = useSelector((state) => state.categoryState);
const handleDelete=(item)=>{ 
  api.delete(`${urls.categories}/${item.id} `)
  .then(()=>{ dispatch({type:ActionTypes.Categories.DELETE_CATEGORIES,payload:item.id}) } )
  setWillModalOpen(false)
  
  }
  return (
    <>
      {" "}
      <Header />
      <h1 className="text-center mt-5 mb-5">Mevcut Kategoriler</h1>
     {categoryState.category.length=== 0 ? <h2 className="text-center bg-warning container"> Listelenecek bir kategory yok</h2>
     :  <div className=" container w-75 text-center">
     <table className="table table-striped ">
       <thead>
         <tr>
           <th >Sıra</th>
           <th >Name</th>
           <th >İşlemler</th>
         </tr>
       </thead>
       <tbody>
         {categoryState?.category?.map((item, index) => (
           <tr key={index}>
             <td> {index + 1} </td>
             <td> {upperCase(item.name)} </td>
             <td >
              
               <div>
                <Link
                   to={`/category/edit-category/${item.id}`}
                   className="btn btn-outline-info"
                 >
                   Düzenle
                 </Link>
                 <button  onClick={(e)=>{ e.preventDefault()
                  setWillDeleteCategory(item)
                    setWillModalOpen(true)
                  
                 } } className="btn btn-outline-danger mx-3">Sil</button>
               </div>
             </td>
           </tr>
         ))}
       </tbody>
     </table>
    {willModalOpen &&  <CustomModal onCancel={()=>{setWillModalOpen(false)}}  onSubmit={()=>{handleDelete(willDeleteCategory)} } />



    }
   </div>





     }
    </>
  );
};

export default ListCategories;
