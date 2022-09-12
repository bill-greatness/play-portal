import React from "react";
import { Pressable, ImageBackground, StyleSheet, View, Text, Image } from "react-native";
import { FriendInfo, SubWithText, TextWithSub } from "../texts";
import {Ionicons} from '@expo/vector-icons'

export const GameTile = () => (
  <Pressable style={defaultStyle.tile}>
    <ImageBackground
      source={require("../../assets/images/mario.png")}
      style={defaultStyle.gameTile}
      imageStyle={{
        resizeMode: "contain",
      }}
    >
      <SubWithText subtext="2,000 players" text="Mario Cart" />
    </ImageBackground>
  </Pressable>
);

export const FriendTile = () => (
  <View style={defaultStyle.friendTile}>
    <View style={defaultStyle.userInfo}>
      <Image source={require("../../assets/images/specimen1.jpg")} style={defaultStyle.profileImage} />
      <FriendInfo text="Test User" subtext="030 332 3351" />
    </View>
    <Ionicons name="ellipsis-vertical" size={25} color="#ccc" />
  </View>
);


const defaultStyle = StyleSheet.create({
  gameTile: {
    width: "auto",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  tile: {
    width: "45%",
    margin: 5,
    padding: 5,
    height: 200,
    borderWidth: 0.5,
    backgroundColor: "rgba(10,10,10,0.5)",
    borderColor: "#fff"
  },
  friendTile:{
    display:"flex",
    margin:5,
    backgroundColor:"green", 
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  profileImage:{
    width:50, 
    height:50, 
    resizeMode:'contain',
    borderRadius:100,
    margin:5
  },
  userInfo:{
    display:"flex",
    flexDirection:'row',
    justifyContent:'flex-start',
    marginHorizontal:5
  }
});
