import { Text, StyleSheet,   View } from "react-native";

export default function Header() {
return (
  
    <View style={styles.header}>
    <Text style={styles.text}>List </Text>
</View>
    
  );
}

const styles = StyleSheet.create({
    header:{
        paddingTop:50,
        height:100,
        backgroundColor:"silver"
    },
    text:{
        fontSize:30,
        color:"red",
       fontStyle:"italic",
       textAlign:"center"
    }
})


