import React, { useState } from "react";
import { Text, TextInput, Button,View,StyleSheet } from "react-native";


export default function Form({addHandler}) {
    const [text,setValue]=useState("")
    const [todo,setTodo]=useState("")
    const onChange=(text)=>{
        setValue(text)
        setTodo("")
      
    }
return (
<View>
    <TextInput style={styles.input} onChangeText={onChange} placeholder="Your Text"/>
    <Button title="Add" color="green" onPress={()=>addHandler(text)}/>
</View>
    
  );
}

const styles = StyleSheet.create({
input:{
    borderBottomWidth:1,
    borderColor:"#000",
    padding:10,
    marginVertical:30,
    marginHorizontal:"10%",
    width:"80%"

}
})


