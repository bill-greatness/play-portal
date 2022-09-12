import React from "react";
import { View, Text, Image } from "react-native";
import Background from "../../components/background";
import { TextWithSub } from "../../components/texts";
import { styles } from "./styles";

export default function Page2() {
  return (
    <Background>
      <View style={styles.container}>
        <Image source={require("../../assets/images/circles.png")} />
        <TextWithSub
          text="Give us a moment..."
          subtext="We are getting ready for you. Hold on for a while"
        />
      </View>
    </Background>
  );
}
