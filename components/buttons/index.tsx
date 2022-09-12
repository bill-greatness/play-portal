import React, { Component } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import {Ionicons} from '@expo/vector-icons'

type TextButtonProps = {
  content: string;
  onPress?: Function;
  icon?:string
};
export const TextButton = ({ content, onPress }: TextButtonProps) => (
  <Pressable onPress={() => onPress()} style={styles.textButton}>
    <Text style={styles.text}>{content}</Text>
  </Pressable>
);

export const BorderedButton = ({ content, onPress, icon }: TextButtonProps) => (
  <Pressable style={styles.borderedButton} onPress={() => onPress()}>
    <Text style={styles.simpleText}> {content} </Text>
    {icon && <Ionicons name={icon} size={25} color="#ccc" />}
  </Pressable>
);

export const IconButton = (
  content: string,
  Icon: new () => Component,
  onPress: Function
) => (
  <Pressable onPress={() => onPress()}>
    <View>
      <Icon />
      <Text>{content}</Text>
    </View>
  </Pressable>
);
