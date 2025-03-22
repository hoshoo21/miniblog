import createDataContext from "./createDataContext"; 
const blogReducer =(state, action)=>{

    switch (action.type){
        case "add_post": 
        console.log(action.payload);
        return [...state,  {id : state.length+1, title : `Blog Post # ${state.length+1}`}  ]

        case "delete_posts": 
            return [];   
        default : 
            return state;
    }
}

const addBlogPost = (dispatch)=>{
    return() =>{
        dispatch({type:'add_post'}) 
 
    };

 } 
 const clearPosts = (dispatch)=>{
     return() =>{
        dispatch({type:'delete_posts'}) 
 
    };
 } 
export const  {Context, Provider} = createDataContext(blogReducer, {addBlogPost, clearPosts}, []);