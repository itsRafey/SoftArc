import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const Upload = () =>{
 async function openDocumentFile() {
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    console.log(
      res.uri,
      res.type, 
      res.name,
      res.size
    );
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      // User cancelled the picker, exit any dialogs or menus and move on
    } else {
      throw err;
    }
  }

 }
 
  return(
  <View style={styles.container}> 
    <Text style={[styles.title, ]}> Select C++,C#,Java Files</Text> 
    
    <Button color='#694fad' title="Select Your Files Here"
    onPress={() => openDocumentFile()}
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

title: {
  color: '#694fad',
  fontSize: 26,
  fontWeight: 'bold'
 
  
},
});