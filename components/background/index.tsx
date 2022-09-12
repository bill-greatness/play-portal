import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

type CoverProps = {
    children: JSX.Element
}

export default function Background({children}: CoverProps) {
  return (
    <ImageBackground
      source={require("../../assets/images/tile.jpg")}
      style={{ ...styles.screen }}
      imageStyle={{
        resizeMode: "stretch",
      }}
    >
        {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: "100%",
        height: "auto",
        marginHorizontal: 0,
      },
})
