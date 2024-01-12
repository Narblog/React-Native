import GlobalStyles from "./GlobalStyles";
import React,{useState} from "react";
import { SafeAreaView, StyleSheet, Text,  View,FlatList } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App() {
  const [listOfItems,setListOfItems]=useState([
    {text:"Buy Milk",key:"1"},
    {text:"Buy Cola",key:"2"},
    {text:"Buy Fanta",key:"3"},
    {text:"Buy Pepsi",key:"4"},
  ])
  const addHandler=(text)=>{
    setListOfItems((list)=>{
      return [
        {text:text,key:Math.random().toString(36).substring(7)},
        ...list
      ]
    })
  }
  const deleteHandler=(key)=>{
    setListOfItems((list)=>{
      return list.filter(listOfItems=>listOfItems.key !=key)
    })
  }
return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
    <View>
  <Header/>
  <Form addHandler={addHandler}/>
  <View>
        <FlatList data={listOfItems} renderItem={({item})=>(
       <ListItem item={item} deleteHandler={deleteHandler}/>
)}/>
  </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

})


