import React, { useContext } from "react";
import  {View, TextInput, Text, StyleSheet} from 'react-native';
import { useRoute } from "@react-navigation/native";

import BlongContents from "../components/BlogContents";
import { Context } from "../context/BlogContext";
const EditBlog =(props)=>{
    const {state, editBlogPost}  = useContext(Context);
    const route = useRoute();
    const { id } = route.params || {};
    const blog = state.find ((post)=> post.id === id);
    const hanldeOnSubmit =(post)=>{
        try{
            post.id = id;
       
            editBlogPost(post, ()=> {
               props.navigation.pop();
            });

        }
        catch(error){
            console.log("eror" + error);
        }
       
    };
    
    return (<BlongContents  onSubmit ={hanldeOnSubmit}  initialValues = {blog}/>);

}

const styles = StyleSheet.create({
    inputContainer : {
        fontSize: 16,
        borderWidth : 1,
        borderColor:'black',
        marginBottom : 15,
        margin :5,
        padding:5
    },
    textContainer :{
        fontSize :20,
        marginBottom:5,
        marginLeft : 5
    }
});

export default EditBlog;