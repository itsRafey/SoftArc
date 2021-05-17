import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';


const HomeScreen = ({navigation}) =>{
    return(
    <Animatable.View 
    animation="fadeInUpBig"
    style={{flex:1,alignItems:'center',justifyContent:'space-evenly'}}> 
      <Text style={{color:'purple'}}> Select the files below</Text>
  
      <Button color='#694fad'
      title="Select Java File/Project"
      onPress={() =>{}}
      />
      <Button color='#694fad' title="Select C++ File/Project"
      onPress={() => {}}
      />
      <Button color='#694fad' title="Select CSharp File/Project"
      onPress={() => {}}
      />

    </Animatable.View>
  );
  };

 
  export default HomeScreen;