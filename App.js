import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
// import LittleLemonFooter from './components/LittleLemonFooter';
// import MenuItems from './components/MenuItems';
import WelcomeScreen from './components/form';
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <WelcomeScreen/>
      </View>
      <View style={styles.footerContainer}>
      </View>
    </>
  );
}

        // <MenuItems />
        // <LittleLemonFooter />
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});
