import createDataContext from "./createDataContext"; 
const blogReducer =(state, action)=>{
    
 
    switch (action.type){
        case "add_post": 
        return [...state,  {id : Math.floor(Math.random() *99999),
                 title : action.payload.title,
                content : action.payload.content}  ]
        case "delete_post":

            state =state.filter ((post)=>{
                
                return post.id !==  action.payload;
             });
            return state;
        case "edit_post":
             try{
            //  state = state.map((post)=>{
            //     post.id === action.payload.id? 
            //     {...post,content: {content : action.payload.content, title: action.payload.title }}
            //  : post});
            const updatedState = state.map(post =>
                            post.id === action.payload.id
                        ? action.payload
                : post
             );
             return updatedState;  
             }
             catch(error){
                console.log(error);
                return state;
             }  
              
        case "delete_posts": 
            return [];   
        default : 
            return state;
    }
}

const addBlogPost = (dispatch)=>{
    return(post, callBack) =>{
        dispatch({type:'add_post', payload:{title : post.title, content : post.content}}) 
        callBack();
    };

 }
 const editBlogPost =(dispatch)=>{
        return (post, callBack)=> {
            try{
            dispatch({type :"edit_post", payload:{
                id : post.id, 
                title : post.title, 
                content : post.content}});
            callBack();
            }
            catch(error){
                console.log("catch" + post);
                console.log("error" + error);
            }
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
export const  {Context, Provider} = createDataContext(blogReducer, 
    {addBlogPost, clearPosts,deletePost,editBlogPost}, 
    [{id : Math.floor(Math.random() * 99999), title :"test title" , content :'test content'}]
);