import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

const ProfileScreen = ({navigation}) =>{
    return(
    <Animatable.View 
    animation="fadeInUpBig"
    style={styles.container}> 
      <Text> Profile Screen</Text>
      <Button title="Click Here"
      onPress={() => alert(
      "Button Clicked")}
      />
    </Animatable.View>
  );
  };
  export default ProfileScreen;

  const styles = StyleSheet.create({
  container:{
      flex:1,
    alignItems:'center',
    justifyContent:'center'
  },


  });