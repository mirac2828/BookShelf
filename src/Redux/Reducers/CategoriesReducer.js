import ActionTypes from '../Actions/ActionTypes'


const initialState={
    pending:true,
    success:false,
    category:[]}

   

    
    const CategoriesReducer =(state=initialState,action)=> {

        switch (action.type) {
            case ActionTypes.Categories.GET_CATEGORIES:
                return{ ...state,
                   success:true,
                  category:action.payload}
             case ActionTypes.Categories.ADD_CATEGORIES :
                return {...state,
                    success:true,
                    category:[...state.category,action.payload]} 
                    case ActionTypes.Categories.DELETE_CATEGORIES :

           const filteredCategory=state.category.filter(item=>item.id !==action.payload)

                        return{ ...state,
                         category:filteredCategory }  

                case ActionTypes.Categories.EDIT_CATEGORIES  :
                    let tempCategory=[]
                    for(let i=0;i<state.category.length;i++)
                    {   if(state.category[i].id===action.payload.id)
                        { tempCategory.push(action.payload)}
                        else{ tempCategory.push(state.category[i] )  }



                    }
                    
                
                
                
                return  {...state,category:tempCategory}     
                
                
        
            default:
              return state
        }
      
    }
    
    export default CategoriesReducer