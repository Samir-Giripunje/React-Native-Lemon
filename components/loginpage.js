import React from 'react';
import { ScrollView, Text, StyleSheet, TextInput} from 'react-native';


export default function LoginScreen() {
  const [firstName, onChangeFirstName] = React.useState('');
  const [phoneNumber, onChangePhoneNumber] = React.useState('');
    const [password, onChangePasswordNumber] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput 
        style={styles.inputBox}
         value={firstName} 
   onChangeText={onChangeFirstName} 
   placeholder={'First Name'} 
      >
      </TextInput>
        <TextInput
         style={styles.inputBox} 
        value={phoneNumber} 
        onChangeText={onChangePhoneNumber} 
        placeholder={'Password'} 
        keyboardType={"default"}
        secureTextEntry={true}
     >
     </TextInput>
      
       

      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={onChangePasswordNumber}
        placeholder={'password'}
        keyboardType={'default'}
        secureTextEntry={true}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
   messageInput: { 
    height: 100, 
    margin: 12, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 16, 
    backgroundColor: '#F4CE14', 
  },
    input: { 
    height: 40, 
    margin: 12, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 16, 
    borderColor: 'EDEFEE', 
    backgroundColor: '#F4CE14',

  },
   inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
});


