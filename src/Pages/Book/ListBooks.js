
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import urls from '../../Api/urls'
import Header from '../../Components/Header'
import ActionTypes from '../../Redux/Actions/ActionTypes'
import { upperCase } from '../../Utility'
import api  from "../../Api/api"



import CustomModal from '../CustomModal'


const ListBooks = () => {
  
 
  const dispatch=useDispatch()
  const[willModelOpen,setWillModalOpen]=useState(false)
  const[willDeleteBook,setWillDeleteBook ]=useState("")
  const[text,setText]=useState("")
 const {bookState,categoryState}=  useSelector(state=>state)
 const [filteredBooks,setFilteredBooks]=useState(bookState?.books)
    useEffect(()=>{
    
    setFilteredBooks
     (bookState.books.filter
      (item=>item.name.toLowerCase().includes(text.toLowerCase())
     
     
     
     ))

      
    
    
    },[text,bookState] )
    const handleDelete=(id)=>{ 
      api.delete(`${urls.books}/${id}`)
      .then(()=>
       dispatch({type:ActionTypes.Books.DELETE_BOOK,payload:id}))
      .catch((err)=>console.log(err))





     }
  return (
    < ><Header/>
    
    <div className='d-flex mt-5  align-items-center 
    flex-column justify-content-center'> 
    <label className='h1'>Search
    </label> 
    <input  value={text} onChange={(e)=>setText(e.target.value) } /> </div>
    {  filteredBooks.length===0 ?  <div className='  d-flex flex-column justify-content-center align-items-center' > <h3 className='text-center m-5 bg-warning w-50'>Listelenecek kitap yok
    </h3> </div>
    
    :  <div className='container mt-5'> <table className="table table-striped">
  <thead> 
    <tr>
      <th scope="col">Sıra</th>
      <th scope="col">Name</th>
      <th scope="col">Publisher</th>
      <th scope="col">Price</th>
      <th scope="col">Category</th>
      <th scope="col">İşlemler</th>
    </tr>
  </thead>
  <tbody>
    {
    
filteredBooks.map((item,index)=>{
  const myCategory=categoryState?.category.find(category=>item.categoryId===category.id)

   return( 

  <tr key={index} >
  <th scope="row">{index+1} </th>
  <td>{item.name} </td>
  <td>{upperCase(item.publisher)} </td>
  <td>{item.price} &#8378; </td>

  <td>{myCategory?.name} </td>
  <td>
  <button 
  onClick={()=> { setWillDeleteBook(item.id)
  console.log(willDeleteBook)
  setWillModalOpen(true)}} className='btn btn-outline-danger'> Sil</button>
   <Link to={`/books/edit-book/${item.id}`}  className='btn btn-outline-info'>Düzenle</Link> 
  </td>
</tr> )


    })}
    
  </tbody>
</table>




    </div>}
   
{ 
willModelOpen  && 
<CustomModal onSubmit={()=>{ handleDelete(willDeleteBook)
setWillModalOpen(false)

} }

onCancel={()=>{setWillModalOpen(false)} } />

}


   
    
    
   
    
    
    </>
  )
}

export default ListBooks