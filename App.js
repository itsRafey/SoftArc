import React,{useEffect} from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './screens/DrawerContent';

import RootStackScreen from './screens/RootStackScreen';
import Context, { AuthContext } from './Component/Context'
import Upload from './screens/Upload'
import Saved from './screens/Saved'
import ContactUs from './screens/ContactUs'

const Drawer = createDrawerNavigator();



const App= () =>{

  const[isLoading,setIsLoading]=React.useState(true);
  const[userToken,setUserToken]=React.useState(null);

const authContext=React.useMemo(()=>({
signIn:()=>{
  setUserToken('asdf')
  setIsLoading(false);

},

signOut:()=>{
  setUserToken(null)
  setIsLoading(false);
},
signUp:()=>{
  setUserToken('asdf')
  setIsLoading(false);
},


}))
  



useEffect(()=>{
   setTimeout(()=>{
 setIsLoading(false);},1000);
  },[]);



  if(isLoading){
    return(
<View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
  <ActivityIndicator size='large'/>
</View>

    );
  }


  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {userToken != null ? (
       <Drawer.Navigator drawerContent={props => <DrawerContent{... props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="ContactUs" component={ContactUs} />
        <Drawer.Screen name="Saved" component={Saved} />
        <Drawer.Screen name="Upload" component={Upload} />
       
       
      </Drawer.Navigator>
      )
      :
      <RootStackScreen/>
      }
    </NavigationContainer >
    </AuthContext.Provider>
  );
};
export default App;
