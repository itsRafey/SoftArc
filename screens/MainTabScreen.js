import React,{Component} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';


import HomeScreen from './HomeScreen';

import ProfileScreen from './ProfileScreen';



const HomeStack = createStackNavigator();
const ProfileScreenStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ()=>(
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    barStyle={{ backgroundColor: '#694fad' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreenStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
   
  </Tab.Navigator>

);


export default MainTabScreen;






const HomeStackScreen=({navigation})=>(
    < HomeStack.Navigator screenOptions={{headerStyle:{
                backgroundColor:'#694fad',
              },
              headerTintColor:'#fff',
              headerTitleStyle:{
                fontWeight:'bold'
              }}}>
            <HomeStack.Screen name="Home" component={HomeScreen} options ={{
                 headerLeft:() => (
    
                  <Icon.Button name="ios-menu" size={25}
                  backgroundColor="#694fad" onPress={() => {navigation.openDrawer();}}>
                  </Icon.Button>
                 )
    
            }}
          
            />
            
          </HomeStack.Navigator>
    );
   
        
      
      const ProfileScreenStackScreen=({navigation})=>(
        < ProfileScreenStack.Navigator screenOptions={{headerStyle:{
                    backgroundColor:'#694fad',
                  },
                  headerTintColor:'#fff',
                  headerTitleStyle:{
                    fontWeight:'bold'
                  }}}>
                <ProfileScreenStack.Screen name="ProfileScreen" component={ProfileScreen} options ={{
                   headerLeft:() => (
      
                    <Icon.Button name="ios-menu" size={25}
                    backgroundColor="#694fad" onPress={() => {navigation.openDrawer();}}>
                    </Icon.Button>
                   )
      
              }}/>
                
              </ProfileScreenStack.Navigator>
        );
      