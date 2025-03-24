import createDataContext from "./createDataContext"; 
const blogReducer =(state, action)=>{
    
 
    switch (action.type){
        case "add_post": 
        console.log("add post");
        return [...state,  {id : Math.floor(Math.random() *99999), title : `Blog Post # ${state.length+1}`}  ]
        case "delete_post":
            state =state.filter ((post)=>{
                
                return post.id !==  action.payload;
             });
            return state;
        case "delete_posts": 
            return [];   
        default : 
            return state;
    }
}

const addBlogPost = (dispatch)=>{
    return() =>{
        console.log("Adding post");
        dispatch({type:'add_post'}) 

    };

 }
 const deletePost = (dispatch )=>{
    return(id) =>{
        dispatch({type:'delete_post', payload : id}); 

    };

 } 
 const clearPosts = (dispatch)=>{
     return() =>{
        dispatch({type:'delete_posts'}) 
 
    };
 } 
export const  {Context, Provider} = createDataContext(blogReducer, {addBlogPost, clearPosts,deletePost}, []);