import React ,{useContext, useState} from "react";
import {View,Text,StyleSheet, TextInput} from 'react-native';

const CreateBlog=(props)=>{
    const [title, setTitle]= useState();
    const [content, setCotent]= useState();
    return (
            <View>
                 <Text 
                    style ={styles.textContainer}
                 > 
                 Blog Title </Text>  
                 <TextInput 
                    style = {styles.inputContainer}
                    placeholder="Enter Blog title here" 
                    value ={title}
                    onChangeText={(text)=> setTitle(text)}
                    />
                 <Text
                    style = {styles.textContainer}
                 > Blog Content </Text>  
                 <TextInput 
                    style = {styles.inputContainer}
                    placeholder="Enter Blog Content here"
                    value ={content}
                    onChangeText={(content)=> setCotent(content)}
                    />
     
            </View>
    );

};

const styles = StyleSheet.create({
    inputContainer : {
        fontSize: 16,
        borderWidth : 1,
        borderColor:'black'
    },
    textContainer :{
        fontSize :20,
        marginBottom:10
    }
});
export default CreateBlog;

