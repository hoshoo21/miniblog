import React, { useState } from "react";

const BlogContext = React.createContext();
export const BlogProvider = (props)=>{
    const [blogPosts, setBlogPosts] = useState([]);
    const addBlogPost = ()=>{
        console.log("adding post");
        setBlogPosts([...blogPosts, {id : blogPosts.length+1, title : `Blog post # ${blogPosts.length+1}`}])
    } 
    return (
            <BlogContext.Provider value ={{blogPosts, addBlogPost}}>
                
                {props.children}
            </BlogContext.Provider>

    );
}

export default BlogContext;