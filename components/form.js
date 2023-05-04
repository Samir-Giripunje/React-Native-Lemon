import React from "react"; 
import { StyleSheet,TextInput,Text, View, ScrollView } from "react-native";



export default function WelcomeScreen(){

const [text,onChangeText]=React.useState('');
return(
<ScrollView style={style.container}>
  <Text style={style.headerText}>
  Welcome to Little Lemon
  </Text>
      <Text style={style.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casusl environment. We would love to hear your expreince with us.
      </Text>
     <TextInput 
        style={style.inputBox}
        onChangeText={onChangeText}
        value={text}
        placeholder="Name"
      >
     
    </TextInput>
    </ScrollView>
);
}

const style=StyleSheet.create({
  container:{
 flex:1,
  },
   headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
    regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
  },
}
);
