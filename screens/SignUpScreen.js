import React from 'react';
import { 
    View, 
    Text, 
    Button,
    TouchableOpacity, 
    Dimensions,
    Platform,
    StyleSheet,
    TextInput,
    StatusBar
    
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
//import SocialButton from './SocialButton';
const SignInScreen = ({navigation}) =>{
   //used to work eye off functionalities
  const[ data,setData] =React.useState({
    name:'',
           email:"",
           password:'',
           Confirm_password:'',
           check_textInputChange:false,
           secureTextEntry:true,
           Confirm_secureTextEntry:true

  });
// creating function for email icon to visible when we type data
const textInputChange=(val)=>{
 if(val.length != 0){
   setData({
...data,
email:val,
check_textInputChange:true
   });
 }
 else{
   setData({
  ...data,
  email:val,
  check_textInputChange:false

   })}
}
const NameInputChange=(val)=>{
  if(val.length != 0){
    setData({
 ...data,
 name:val,
 tick_textInputChange:true
    });
  }
  else{
    setData({
   ...data,
   name:val,
   tick_textInputChange:false
 
    })}
 }


// creating function for password see icon
const PasswordChange=(val)=>{
  setData({
 ...data,
 password:val

  });
 }
 const ConfirmPasswordChange=(val)=>{
  setData({
 ...data,
 Confirm_password:val

  });
 }
const updateSecureTextEntry= () =>{
  setData({
    ...data,
    secureTextEntry:!data.secureTextEntry
  })
}
const updateConfirmSecureTextEntry= () =>{
  setData({
    ...data,
    Confirm_secureTextEntry:!data.Confirm_secureTextEntry
  })
}
    return(

   <View style={styles.container}>
     <StatusBar backgroundColor='#8A2BE2' barStyle='light-content'/>
<View style={styles.header}>
<Text style={styles.text_header}>Register YourSelf!</Text>

</View>

<Animatable.View 
animation="fadeInUpBig"
style={styles.footer}>

<Text style={styles.text_footer}>Full Name</Text>

<View style={styles.action}>
<FontAwesome
name="user-o"
color="#05375a"
size={20}
/>
<TextInput
placeholder="Your Name"
style={styles.textInput}
autoCapitalize="none"
onChangeText={(val)=>NameInputChange(val)}
/>
{data.tick_textInputChange ?

<Animatable.View 
animation="bounceIn">
<Feather
name="check-circle"
color="green"
size={20}
/>
</Animatable.View>

: null}
</View>


<Text style={styles.text_footer}>Email</Text>

<View style={styles.action}>
<FontAwesome
name="user-o"
color="#05375a"
size={20}
/>
<TextInput
placeholder="Your Email"
style={styles.textInput}
autoCapitalize="none"
onChangeText={(val)=>textInputChange(val)}
/>
{data.check_textInputChange ?

<Animatable.View 
animation="bounceIn">
<Feather
name="check-circle"
color="green"
size={20}
/>
</Animatable.View>

: null}
</View>




<Text style={[styles.text_footer,{ marginTop:2}]}>Password</Text>
<View style={styles.action}>

<FontAwesome
name="lock"
color="#05375a"
size={20}
/>
<TextInput
placeholder="Your Password"
secureTextEntry={data.secureTextEntry ? true:false}
style={styles.textInput}
autoCapitalize="none"
onChangeText={(val)=>PasswordChange(val)}
/>
<TouchableOpacity 
onPress={updateSecureTextEntry}>
  { data.secureTextEntry ?
<Feather
name="eye-off"
color="grey"
size={20}
/>
:
<Feather
name="eye"
color="grey"
size={20}
/>
}
</TouchableOpacity>
</View>

<Text style={[styles.text_footer,{ marginTop:2}]}>Confirm Password</Text>
<View style={styles.action}>

<FontAwesome
name="lock"
color="#05375a"
size={20}
/>
<TextInput
placeholder="Confirm Password"
secureTextEntry={data.Confirm_secureTextEntry ? true:false}
style={styles.textInput}
autoCapitalize="none"
onChangeText={(val)=>ConfirmPasswordChange(val)}
/>
<TouchableOpacity 
onPress={updateConfirmSecureTextEntry}>
  { data.Confirm_secureTextEntry ?
<Feather
name="eye-off"
color="grey"
size={20}
/>
:
<Feather
name="eye"
color="grey"
size={20}
/>
}
</TouchableOpacity>
</View>

{/* signin sign up button */}
<View style={styles.button}>
  <LinearGradient 
    colors={['#8A2BE2','#8A2BE2']}
    style={styles.signIn}
  >
 <Text style={[styles.textSign,{ color:'#fff'}]}> Sign Up</Text>
  </LinearGradient>

  <TouchableOpacity onPress={()=>navigation.goBack()}
  style={[styles.signIn,{ 
    borderColor:'#8A2BE2',
    borderWidth:1,
    marginTop:15
  }]}
  >
<Text style={[styles.textSign,{
  color:'#8A2BE2'
}]}> Sign In</Text>
</TouchableOpacity>

</View>
</Animatable.View>





{/*{Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign Up with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
          />
    
          <SocialButton
            buttonTitle="Sign Up with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
        </View>
        
) : null}*/}

   </View>
  );
  };

  export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#8A2BE2'
    },
    header:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer:{
        flex: 8,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });