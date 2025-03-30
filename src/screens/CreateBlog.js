import React ,{useContext, useState} from "react";
import {View,Text,StyleSheet, Button, TextInput} from 'react-native';
import { Context } from "../context/BlogContext";
import BlongContents from "../components/BlogContents";
const CreateBlog=(props)=>{
    const {addBlogPost} = useContext(Context);
    
    const handleSubmit =(post)=>{
        console.log("hanlde submit");
        addBlogPost(post, 
            ()=> props.navigation.navigate("BlogList") 
        );
    };

    return(
        <BlongContents onSubmit = {handleSubmit} />
    )
};

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
export default CreateBlog;

