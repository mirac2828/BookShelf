import React from 'react'
import "../styles/CustomModal.css" 

const CustomModal = ({onCancel=()=>{} ,onSubmit=()=>{}})=> {
  return (
    <div className='custom' >
        <div className='middle '> 
        <div><h3>  Silmek istediğinizden emin misiniz?</h3></div>
        <div className='d-flex  gap-3'><button onClick={onCancel} className='btn btn-primary'>Vazgeç</button>
        <button onClick={onSubmit} className='btn btn-danger'>Onayla</button>
        </div>
        
        
        
        
        </div>




    </div>
  )
}

export default CustomModal