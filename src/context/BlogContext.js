import createDataContext from './createDataContext';
import {SupabaseHelper}  from "../dbHelper/SupabaseHelper"; 

const blogReducer = (state, action)=>{
    
 
    switch (action.type){
        case "get_blogposts":
            return action.payload;
        case "add_post": 
            console.log(action);
            return state;
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
    
    return async (post, callBack) =>{
        try 
        {
            console.log(JSON.stringify(post));
            const { data, error } = await SupabaseHelper
            .from("blogs")
            .insert([
              { 
                id: Math.floor(Math.random() * 99999), 
                title: post.title, 
                content: post.content 
              }
            ]);

          
          if (error) {
            console.error("Error inserting data:", error.message);
          } else {
            console.log("Data inserted successfully:", data);
            //dispatch({type:'add_post', payload:{title : post.title, content : post.content}}) 
            callBack();
         
          }
        }
        catch(error){
            console.log(error);
        }
    };

 }
 const getBlogPosts =(dispatch)=>{
        return  async()=>{
            const { data, error } = await SupabaseHelper
            .from('blogs')
            .select('*')
            .order('id', { ascending: true })
            if (error)
            {
                    console.log('error', error);
            }
            else 
            {
                console.log(data);
                dispatch({type :"get_blogposts" , payload :data   });

            }
        }
 }


 const editBlogPost =(dispatch)=>{
        return  async (post, callBack)=> {
            try{
             const { data, error } = await SupabaseHelper
            .from('blogs')
            .update({"title": post.title, "content": post.content})
            .eq("id", post.id)    
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
    
    return async(id) =>{
        await SupabaseHelper.from('blogs').delete().eq('id', id).throwOnError()
        dispatch({type:'delete_post', payload : id}); 

    };

 } 
 const clearPosts = (dispatch)=>{
     return() =>{
        dispatch({type:'delete_posts'}) 
 
    };
 } 
export const  {Context, Provider} = createDataContext(blogReducer, 
    {addBlogPost, clearPosts,deletePost,editBlogPost,getBlogPosts}, 
    []
);