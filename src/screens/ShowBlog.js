import React, {useContext} from "react";

import {View, StyleSheet, Text} from 'react-native';
import { useRoute } from "@react-navigation/native";
import {Context} from '../context/BlogContext';
const ShowBlog =(props)=>{
    const route = useRoute();
    const {state} = useContext(Context);
    const { id } = route.params || {};
    const blog = state.find ((post)=> post.id === id);
    console.log(blog);
    return(

        <View>
           
            <Text>  {blog.title} </Text>
        </View>
    );

};

const styles = StyleSheet.create({
    
});

export default ShowBlog;