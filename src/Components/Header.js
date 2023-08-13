import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      
      
      <div  style= {{height:"100px"}} className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav">
          <li className="navbar">
            <Link className="navbar-brand mx-5" to="/">
              Home
            </Link>
          </li>
          <li className="navbar">
            <Link className="navbar-brand" to="/books">
              List Books
            </Link>
          </li>
          <li className="navbar">
            <Link className="navbar-brand" to="/category">
              List Categories
            </Link>
          </li>
        </ul>
      </div>
      <div className="d-flex ">
       
        <Link  className="btn btn-outline-warning mx-2" to="/books/add-book">
         
          Add Book
        </Link>{" "}
      </div>
      <div className="d-flex ">
       
        <Link to="/category/add" className="btn btn-outline-warning mx-5">
         
          Add Category
        </Link>{" "}
      </div>
    </nav>
  );
};

export default Header;
