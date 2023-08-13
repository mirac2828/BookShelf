
import ActionTypes from "../Actions/ActionTypes";

 const initialState={pending:false,
                     success:false,
                     books:[]    }
const BooksReducer=(state=initialState,action)=>{ 

switch (action.type) {
    case ActionTypes.Books.ADD_BOOK:
        return { ...state,
        success:true,
        books:[...state.books,action.payload]}
     case ActionTypes.Books.GET_BOOKS:
        return { ...state,
        success:true,
        books:action.payload }
    
      case ActionTypes.Books.EDIT_BOOK :
        const editedBooks=[]
        for(let i=0;i<state.books.length;i++)
        {  if(state.books[i].id===action.payload.id) 
            {   editedBooks.push(action.payload)}
            else{ editedBooks.push(state.books[i])} }
            return {...state,
            books:editedBooks}
        
      
    
    case ActionTypes.Books.DELETE_BOOK :
        const filteredBooks = state.books.filter(item=>item.id !== action.payload)

        return{ ...state,
            books:filteredBooks
            




        }
        
        
        

    default:
       return state
}





}         
export default BooksReducer            