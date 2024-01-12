import GlobalStyles from "./GlobalStyles";
import { SafeAreaView, StyleSheet,   View, } from "react-native";

export default function App() {
return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <View  style={styles.mainBlock} >
     <View style={[styles.box,{backgroundColor:"rede",flex:2}]}></View>
     <View style={[styles.box,{backgroundColor:"blue",flex:2}]}></View>
     <View style={[styles.box,{backgroundColor:"orange"}]}></View>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
mainBlock:{
  flex:1,
  
  flexDirection:"row"
},
box:{
  flex:1,
 width:100,
height:100
},

})


