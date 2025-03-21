import React, {useContext} from "react";
import {Text,View, StyleSheet, Button, FlatList} from 'react-native';
import BlogContext from "../context/BlogContext";


const BlogIndex =()=>{
       const {blogPosts, addBlogPost }= useContext(BlogContext); 
       console.log(blogPosts); 
       return (
            <View>
               <Text> Posts </Text>
               <Button title ="Add Blog" onPress={addBlogPost} />
               <FlatList 
                    data = {blogPosts}
                    keyExtractor={(post)=> post.id}
                    renderItem={({item})=>
                        { return <Text> {item.title}</Text>} }
               />
            </View>

        )

}


const styles=  StyleSheet.create({

});

export default BlogIndex;