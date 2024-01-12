import { Text, StyleSheet,  TouchableOpacity } from "react-native";

export default function ListItem({item,deleteHandler}) {
return (
 <TouchableOpacity onPress={()=>deleteHandler(item.key)}>
    <Text style={styles.text}>{item.text}</Text>
 </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
 text:{
    padding:20,
    textAlign:"center",
    borderRadius:5,
    backgroundColor:"#fafafa",
    borderWidth: 1,
    marginTop:20,
    width:"80%",
    marginLeft:"10%"
 }
})


