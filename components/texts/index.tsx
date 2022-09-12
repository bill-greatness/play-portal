import React from "react";
import { Text, View, Pressable } from "react-native";
import { styles } from "./styles";

type TextProps = {
  text: string;
  subtext: string;
};

type SpiltTextProps = {
  pre: string;
  post: string;
  onPress?: Function;
};

type ProfileText = {
  greetings: string;
  username: string;
};

export const TextWithSub = ({ text, subtext }: TextProps) => (
  <View style={styles.textContainer}>
    <Text style={styles.content}>{text}</Text>
    <Text style={styles.sub}>{subtext}</Text>
  </View>
);

export const FriendInfo = ({text, subtext}: TextProps) => (
  <View style={{display:"flex"}}>
    <Text style={styles.username}>{text}</Text>
    <Text>{subtext}</Text>
  </View>
)

export const SubWithText = ({ text, subtext }: TextProps) => (
  <View >
    <Text style={styles.sub1}>{subtext}</Text>
    <Text style={styles.content1}>{text}</Text>
  </View>
);

export const SpiltText = ({ pre, post, onPress }: SpiltTextProps) => (
  <View style={styles.splitContainer}>
    <Text style={styles.pre}>{pre}</Text>
    <Pressable onPress={() => onPress()}>
      <Text style={styles.post}>{post}</Text>
    </Pressable>
  </View>
);

export const ProfileText = ({ greetings, username }: ProfileText) => (
  <View style={styles.profileText}>
    <Text style={styles.greetings}>{greetings}</Text>
    <Text style={styles.username}>{username}</Text>
  </View>
);
