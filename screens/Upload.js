import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const Upload = () =>{
    return(
    <View style={styles.container}> 
      <Text> Explore Screen</Text>
      <Button title="Click Here"
      onPress={() => alert(
      "Button Clicked")}
      />
    </View>
  );
  };
  export default Upload;

  const styles = StyleSheet.create({
  container:{
      flex:1,
    alignItems:'center',
    justifyContent:'center'
  },


  });