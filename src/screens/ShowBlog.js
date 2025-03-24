import React, {useContext, useEffect} from "react";

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { useRoute } from "@react-navigation/native";
import Feather from '@expo/vector-icons/Feather';
import {Context} from '../context/BlogContext';
const ShowBlog =(props)=>{
    const route = useRoute();
    const {state} = useContext(Context);
    const { id } = route.params || {};
    const blog = state.find ((post)=> post.id === id);
    useEffect(()=>{
        props.navigation.setOptions({
                headerRight: () => (
                    <TouchableOpacity 
                                        onPress={() => props.navigation.navigate("EditBlog")} 
                                        style={{ marginRight: 15 }}>
                        <Feather name="edit" size={24} color="black" />
                    </TouchableOpacity>
                ),
            });
      },[props.navigation]);
     
    return(

        <View>
            
            <Text>  {blog.title} </Text>
            <Text> {blog.content} </Text>
        </View>
    );

};

const styles = StyleSheet.create({
    
});

export default ShowBlog;