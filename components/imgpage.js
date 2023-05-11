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
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Image
        style={styles.image}
        source={require('../images/food1.jpeg')}
        resizeMode='contain'
        accessible={true}
        accessibilityLabel='food1'
      />
      <Image
        style={styles.image}
        source={require('../images/food2.jpeg')}
        resizeMode='contain'
        accessible={true}
        accessibilityLabel='food2'
      />
     
<Image
        style={styles.image}
        source={require('../images/food4.jpeg')}
        resizeMode='contain'
        accessible={true}
        accessibilityLabel='food4'
      />

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
