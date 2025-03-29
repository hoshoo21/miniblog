import React, {useContext, useEffect} from "react";
import {Text,View, StyleSheet, Button,  FlatList, TouchableOpacity} from 'react-native';
import { Context } from "../context/BlogContext"; // Ensure correct import
import Feather from '@expo/vector-icons/Feather';

const BlogIndex =(props)=>{
      const { state, addBlogPost, clearPosts,deletePost } = useContext(Context);
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
        fontSize : 24
     }
});

export default BlogIndex;