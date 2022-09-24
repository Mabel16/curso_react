import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/home';
import { NavigationContainer } from '@react-navigation/native';
import DrawerRoute from './src/routes/drawer';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerRoute/>
    </NavigationContainer>
  );
}
