import React from 'react';
import {View,StyleSheet} from 'react-native';
import {
Avatart,
Title,
Caption,
Paragraph,
Drawer,
Text,
TouchableRipple,
Switch,
Avatar
} from 'react-native-paper'
import{
DrawerContentScrollView,
DrawerItem

} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../Component/Context'
export function DrawerContent(props){

  {/* For Dark Theme*/}
const [isDarkTheme,setIsDarkTheme]=React.useState(false);

const {signOut}=React.useContext(AuthContext);

const toogleTheme=()=>{

setIsDarkTheme(!isDarkTheme);

}

return(
<View style={{flex:1}}>
<DrawerContentScrollView {...props}>
    <View style={styles.drawerContent}>






        {/* User info section */} 
        <View style={styles.userInfoSection}>
        <View style={{flexDirection:'row',marginTop:15}}>
            <Avatar.Image
             source={{
                 uri: 'assets:/icon1.png' 
                }} 
            size={70}
            />
            <View style={{marginLeft:15,flexDirection:'column'}}>
                <Title style={styles.title}> Name is Purple</Title>
                <Caption style={styles.caption}>@itsPurple</Caption>
            </View>
            
            </View>
        </View>






{/* items Icon Section */} 
<Drawer.Section style={styles.drawerSection}>
<DrawerItem
      icon={({color,size})=>(
          <Icon
          name="home-outline"
          color={color}
          size={size}
          />
      )}
    label="Home"
    onPress={()=>{ props.navigation.navigate ('Home')}}
/>
<DrawerItem
      icon={({color,size})=>(
          <Icon
          name="arrow-down"
          color={color}
          size={size}
          />
      )}
    label="Saved"
    onPress={()=>{ props.navigation.navigate ('Saved')}}
/>

<DrawerItem
      icon={({color,size})=>(
          <Icon
          name="upload-outline"
          color={color}
          size={size}
          />
      )}
    label="Upload"
    onPress={()=>{ props.navigation.navigate ('Upload')}}
/>

<DrawerItem
      icon={({color,size})=>(
          <Icon
          name="account-check-outline"
          color={color}
          size={size}
          />
      )}
    label="Contact Us"
    onPress={()=>{ props.navigation.navigate ('ContactUs')}}
/>

</Drawer.Section>




{/* Dark Theme Button */}

<Drawer.Section title='Preferences'>
  <TouchableRipple onPress={()=>{toogleTheme()}}>
<View style={styles.preference}>
  <Text> DarkTheme</Text>
  <View pointerEvents='none'>
  <Switch value={isDarkTheme}/>
  </View>
  </View>

  </TouchableRipple>
</Drawer.Section>
    </View>
</DrawerContentScrollView>
<Drawer.Section style={styles.bottomDrawerSection}>

<DrawerItem
      icon={({color,size})=>(
          <Icon
          name="exit-to-app"
          color={color}
          size={size}
          />
      )}
    label="Sign Out"
    onPress={()=>{signOut()}}
/>
</Drawer.Section>


</View>

);

}

{/*Css */}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });