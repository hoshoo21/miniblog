import React, {useContext} from "react";
import {Text,View, StyleSheet, Button, FlatList} from 'react-native';
import { Context } from "../context/BlogContext"; // Ensure correct import


const BlogIndex =()=>{
      const { state, addBlogPost, clearPosts } = useContext(Context);
      console.log("🛠 BlogIndex state:", state);
      return (

             <View>
                <Text> Posts </Text>
                <Button title ="Add Blog" onPress={addBlogPost} />
                <Button title ="Clear Post" onPress={clearPosts} />

                <FlatList 
                        data = {state}
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