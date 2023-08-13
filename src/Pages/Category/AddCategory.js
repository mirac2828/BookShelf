import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import api from "../../Api/api";
import urls from "../../Api/urls";
import Header from "../../Components/Header";
import ActionTypes from "../../Redux/Actions/ActionTypes";
import "../../styles/addCategory.css"
const AddCategory = () => {

  const navigate = useNavigate();
  const categoryState=useSelector(state=>state.categoryState)

  const dispatch = useDispatch();
  const [text, SetText] = useState("");
  const Mycategory=categoryState?.category?.find(item=>item.name ===text)
  const handleSubmit = () => {
    const newCategory = { name: text,
      id:String(new Date().getTime())
        };
    if(text===""){ alert("bu alan boş bırakılamaz")
     return}
    api.post(urls.categories, newCategory).then(() => {
      dispatch({
        type: ActionTypes.Categories.ADD_CATEGORIES,
        payload: newCategory,
      });
    });
    SetText("");
    navigate("/category");
  };
  return (
    <div>
      <Header />

      <div className="category ">
        
        <label>
          <h3>Category Name</h3>
        </label>
        <input placeholder="   Add  Category Name"
        type="text"
          value={text}
          onChange={(e) => SetText(e.target.value)}
          className="categoryInput px-5"
        />
    <button disabled={Mycategory?.name===text ? true:false}
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="btn btn-outline-info"
        > Add
        </button> 


       
      


     
       
        
        
           
      </div>
    </div>
  );
};

export default AddCategory;
