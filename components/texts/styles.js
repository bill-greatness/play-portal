import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    fontSize: 22,
    fontFamily: "bold",
    paddingBottom: 3,
    textAlign: "center",
    color: "#fff",
  },
  sub: {
    fontSize: 13,
    fontFamily: "regular",
    color: "#ccc",
    textAlign: "center",
  },
  textContainer: {
    marginVertical: 20,
    display: "flex",
    flexDirection: "column",
    height: 150,
    width: 300,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  splitContainer: {
    flexDirection: "row",
    display: "flex",
    marginVertical: 10,
  },
  pre: {
    fontFamily: "regular",
    fontSize: 12,
    color: "#ccc",
  },
  post: {
    fontFamily: "regular",
    fontSize: 12,
    color: "orange",
  },
  profileText: {
    flexDirection: "column",
    textAlign: "center",
  },
  greetings: {
    textAlign: "center",
    fontFamily: "bold",
    color: "orange",
    fontSize: 16,
  },
  username: {
    textAlign: "center",
    fontFamily: "bold",
    fontSize: 14,
    marginTop: -5,
    color: "#ccc",
  },
  // inverted subtext and main text here the subtext appears first.
  sub1: {
    fontSize: 13,
    color:'#ccc',
    textAlign:'left',
    fontFamily: "regular",
  },
  content1: {
    fontSize:16,
    marginTop:-5,
    textTransform:'uppercase',
    fontFamily:'bold',
    textAlign:'left',
    color:'#fff'
  },
  friendName:{
    fontSize:16,
    fontFamily:"bold"
  }
});
