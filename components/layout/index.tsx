import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet } from "react-native";
import Friends from "../../pages/friends";

// pages import here
import Home from "../../pages/home";
import OnBoarding from "../../pages/onboarding";
import Page2 from "../../pages/onboarding/page-2";
import UsernameSetup from "../../pages/setup-username";
import VerifyAccount from "../../pages/verify";

export default function Layout() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Friends />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'100%'
  }
})