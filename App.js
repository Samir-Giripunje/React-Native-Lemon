import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MenuScreen from "./components/MenuItems";
import WelcomeScreen from "./components/loginpage";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome"
        screenOptions={{ headerStyle: { backgroundColor: '#FBDABB' } }}>
                <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// <Stack.Screen name="Menu" component={MenuScreen} />
        // <Stack.Screen name="Welcome" component={WelcomeScreen} />

export default App;

// import * as React from 'react';
// import { View, StyleSheet } from 'react-native';
// import LittleLemonHeader from './components/LittleLemonHeader';
// import LittleLemonFooter from './components/LittleLemonFooter';
// // import MenuItems from './components/MenuItems'; 
// // import LoginScreen from './components/loginpage';
// // import WelcomeScreen from './components/form';
// import Welcome from './components/imgpage';
//  export default function App() {
//   return (   <>
//       <View style={styles.container}>
//         <LittleLemonHeader />
//         <Welcome/>
//         <LittleLemonFooter />
//       </View>
//       <View style={styles.footerContainer}>
//       </View>
//     </>
//   
//   
//
//   );
// }
//         // <WelcomeScreen/>
//
//         // <LoginScreen/>
//         // <MenuItems />
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#333333',
//   },
//   footerContainer: { backgroundColor: '#333333' },
// });

