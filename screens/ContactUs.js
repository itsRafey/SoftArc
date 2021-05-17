import React from 'react';
import {View,Text,Button,StyleSheet, TextInput} from 'react-native';


class ContactUs extends React.Component{

   constructor()
   {

    super();
    this.state={
          name:"",
          email:'',
          password:''


    }
   }
   render()
{
  return (

    <View style={{margin:20,marginTop:100}}>
               <TextInput  
               placeholder="EnterName"
               onChangeText={(text)=>{this.setState({name:text})}}
               style={{borderWidth:3,borderColor:'#694fad',margin:20}}
               />

<TextInput  
               placeholder="EnterEmail"
               onChangeText={(text)=>{this.setState({email:text})}}
               style={{borderWidth:3,borderColor:'#694fad',margin:20}}
               />

<TextInput  
               placeholder="Query Here"
               secureTextEntry={true}
               onChangeText={(text)=>{this.setState({password:text})}}
               style={{borderWidth:3,borderColor:'#694fad',margin:20,cols:30,rows:10}}
               />
<Button  color='#694fad' title="submit" onPress={()=>{}} />


    </View>
  )
}

  


}

export default ContactUs;



{/*const ContactUs = ({navigation}) =>{
    return(
    <View style={styles.container}> 
      <Text> Explore Screen</Text>
      <Button title="type ur query here"
      onPress={() => alert(
      "Button Clicked")}
      />
    </View>
  );
  };
  export default ContactUs;

  
  const ContactUsStack = createStackNavigator();
  const App =() =>{
return(
   <NavigationContainer>
           <Stack.Navigator>
        <Stack.Screen name="ContactUs" component={ContactUs} />
      </Stack.Navigator>
           

   </NavigationContainer>



)


  }

  
  const styles = StyleSheet.create({
  container:{
      flex:1,
    alignItems:'center',
    justifyContent:'center'
  },


  });*/}