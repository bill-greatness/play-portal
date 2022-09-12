import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  screenImage: {
    height: 250,
    width: 300,
  },
  singleInput:{
    width:250,
  },
  input:{
    padding:5,
    backgroundColor:'#fff',
    display:'flex',
    flexDirection:"row",
    alignItems:'center'
  },
  inputIcon:{
    padding:2
  },
  phoneInput:{
    paddingHorizontal:2,
    marginHorizontal:5,
    flex:1,
    fontFamily:'regular'
  }
});
