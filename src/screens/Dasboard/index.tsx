import React from "react";
import { View, Text , StyleSheet} from "react-native";

export function Dashboard(){
  return(
    <View style={styles.conrainer}>
      <Text>DashBoard Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  conrainer:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    fontSize:'19'
  }
})