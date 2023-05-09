import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
// import MenuItems from './components/MenuItems'; 
// import LoginScreen from './components/loginpage';
// import WelcomeScreen from './components/form';
import Welcome from './components/imgpage';
 export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Welcome/>
        <LittleLemonFooter />
      </View>
      <View style={styles.footerContainer}>
      </View>
    </>
  );
}

        // <LoginScreen/>
        // <WelcomeScreen/>
        // <MenuItems />
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});
