import React, {useCallback, useContext, useEffect} from "react";
import {Text,View, StyleSheet, Button,  FlatList, TouchableOpacity} from 'react-native';
import { Context } from "../context/BlogContext"; // Ensure correct import
import Feather from '@expo/vector-icons/Feather';
import { useFocusEffect } from "@react-navigation/native";

const BlogIndex =(props)=>{
      const { state, dispatch, addBlogPost, clearPosts,deletePost,getBlogPosts } = useContext(Context);
      const onAddBlog =(id)=>{
                props.navigation.navigate("BlogDetails",{id});
      };

      useEffect(()=>{
     
        props.navigation.setOptions({
                headerRight: () => (
                    <TouchableOpacity 
                                        onPress={() => props.navigation.navigate("CreateBlog")} 
                                        style={{ marginRight: 15 }}>
                        <Feather name="plus" size={24} color="black" />
                    </TouchableOpacity>
                    
                ),
            });
      },[props.navigation]);
   
      useFocusEffect(
        useCallback(() => {
            console.log("Screen focused, fetching blog posts...");
            getBlogPosts();  // ✅ Call function when screen is focused
        }, [])
    )

      return (
             <View>
                {
                state.length>0? 
                        <FlatList 
                        data = {state}
                        keyExtractor={(post)=> post.id}
                        renderItem={({item})=>
                            { return (
                                <TouchableOpacity onPress={()=> {onAddBlog(item.id)}}>
            
                                <View style ={styles.rowContainer }>
                                  <Text style ={styles.titleContainer}> {item.title}</Text>
                                <TouchableOpacity >
                                        <Feather name ="trash" 
                                        style ={styles.iconContainer} 
                                        onPress={()=>{
                                                console.log("deleting post");
                                                deletePost(item.id)
                                        }}
                                        />
                                
                                </TouchableOpacity>
                                </View>
                         </TouchableOpacity>
       
                            )
                        } }
                        />
                        :
                         null}
               
          
            </View>
            
        )

};


const styles=  StyleSheet.create({
    rowContainer :{
        flexDirection:"row",
        justifyContent :'space-between' ,
        paddingVertical:20,
        borderWidth : 1,
        borderRadius : 6,
        borderColor : 'gray',
        }, 
     titleContainer : {
        fontSize : 16
     },
     iconContainer : {
        fontSize : 24,
        marginRight:10,
     }
});

export default BlogIndex;