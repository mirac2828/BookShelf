import { combineReducers, createStore } from "redux";
import BooksReducer from "./Reducers/BooksReducer";
import CategoriesReducer from "./Reducers/CategoriesReducer";

 const  rootReducer=combineReducers({bookState:BooksReducer,
                                     categoryState:CategoriesReducer})
 const store=createStore(rootReducer)
 export default store