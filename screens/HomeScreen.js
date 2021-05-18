import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';


const HomeScreen = ({navigation}) =>{
    return(
    <Animatable.View 
    animation="fadeInUpBig"
    style={{flex:1,alignItems:'center',justifyContent:'space-evenly'}}> 
      <Text style={{color:'#694fad',fontFamily:'open sans', fontSize: 40,fontWeight: 'bold'}}> Welcome to Soft-Arc!</Text>
       
     

    </Animatable.View>

    
  );
  
  };

 
  export default HomeScreen;