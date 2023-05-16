import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';

const Welcome = () => {
  return (
    <ScrollView style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('../images/littleLemonLogo.png')}
        resizeMode='contain'
        accessible={true}
        accessibilityLabel='Little Lemon Logo'
      />
       <Text style={styles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. View our
          menu to explore our cuisine with daily specials!
        </Text>
         </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
     height: 100,
     width: 300,
     resizeMode: 'contain',
  },
  container: {
    flex: 1,
    padding: 12,
    // marginTop: 25,
    backgroundColor: '#fff',
  },
 image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    paddingTop: 20,
  },
  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Welcome;
