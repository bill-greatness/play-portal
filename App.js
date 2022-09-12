import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Layout from './components/layout';
import * as Font from 'expo-font'
import { useEffect, useState } from 'react';

let customFonts = {
  'regular': require("./assets/fonts/Poppins-Regular.ttf"),
  'bold': require("./assets/fonts/Poppins-SemiBold.ttf"),
  'light': require("./assets/fonts/Poppins-Light.ttf")
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  
  async function _loadFontsAsync() {
    await Font.loadAsync(customFonts); 
    setFontsLoaded(true)
  }

  useEffect(() => {
      _loadFontsAsync()
  },[])
  
  if (!fontsLoaded){
    return null
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Layout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
