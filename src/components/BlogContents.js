import React, {useState} from "react";
import  {View, TextInput, Text, Button, StyleSheet} from 'react-native';


const BlongContents =(props)=>{
    const [title, setTitle]= useState(props.initialValues?props.initialValues.title: "" );
    const [content, setContent]= useState(props.initialValues?props.initialValues.content : "" );
    const [inputHeight, setInputHeight] = useState(40); 
    return (
        <View>
                 <Text 
                    style ={styles.textContainer}>Blog Title </Text>  
                 <TextInput 
                    style = {styles.inputContainer}
                    placeholder="Enter Blog title here" 
                    
                    value ={title}
                    onChangeText={(text)=> setTitle(text)}
                    />
                 <Text
                    style = {styles.textContainer}>Blog Content</Text>  
                 <TextInput 
                    multiline 
                    numberOfLines={10}
                    style ={[{...styles.inputContainer},  {height: Math.max(100), textAlignVertical:'top'}]}
                    placeholder="Enter Blog Content here"
                    value ={content}
                    onChangeText={(content)=> setContent(content)}
                    onContentSizeChange={(e)=>{
                        setInputHeight(e.nativeEvent.contentSize.height)}}
                   />
                    <View style={{marginHorizontal:100}}>
                         <Button title ="Save Blog" 
                            onPress={()=>{ 
                                props.onSubmit({title, content})
                            
                            }}
                         />

       
                    </View>
            </View>
    )
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



export default BlongContents;



