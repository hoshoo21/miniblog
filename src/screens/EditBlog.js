import React from "react";
import  {View, TextInput, Text, StyleSheet} from 'react-native';
import BlongContents from "../components/BlogContents";

const EditBlog =(props)=>{

    return (<BlongContents />);

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