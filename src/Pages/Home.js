import React from 'react'
import { useSelector } from 'react-redux'

import Header from '../Components/Header'


const Home = () => {

   const {bookState,categoryState}= useSelector(state=>state)

  
  return (
    <div>
        
         <Header/>
         
         <div className='container mt-5'> <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Sıra</th>
      <th scope="col">Name</th>
      <th scope="col">Publisher</th>
      <th scope="col">Price</th>
      <th scope="col">Category</th>
    </tr>
  </thead>
  <tbody>
    { bookState.books.map((item,index)=> {
        categoryState.category.map(category=> {
            if(category.id===item.categoryId){ item.category=category.name }



        })
       


return(<tr key={index} >
    <th scope="row">{index+1} </th>
    <td>{item.name} </td>
    <td>{item.publisher} </td>
    <td>{item.price} &#8378; </td>
    <td>{item.category} </td>
  </tr>      )

    }  
            )}
    
  
  
  
  
  </tbody>
</table>




    </div>


    
    
    
    </div>
  )
}

export default Home