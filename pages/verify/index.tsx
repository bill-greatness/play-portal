import { Image, View, TextInput, StyleSheet } from "react-native";
import Background from "../../components/background";
import { TextButton } from "../../components/buttons";
import { SpiltText, TextWithSub } from "../../components/texts";
import { styles } from "../onboarding/styles";

export default function VerifyAccount() {
  return (
    <Background>
      <View style={styles.container}>
        <Image source={require("../../assets/images/verify.png")} style={{width:350, resizeMode:'contain'}} />
        <TextWithSub
          text="Looks like your new here"
          subtext="Enter the verification code we just sent to your phone number"
        />
        <View style={vstyles.promptCode}>
            <TextInput style={vstyles.prompt}/>
            <TextInput style={vstyles.prompt}/>
            <TextInput style={vstyles.prompt}/>
            <TextInput style={vstyles.prompt}/>
        </View>
        <SpiltText pre="Didn't receive any code ? " post=" Resend Code" />
        <TextButton content="Verify Account" />
      </View>
    </Background>
  );
}

const vstyles = StyleSheet.create({
    promptCode:{
        display:"flex",
        marginTop:-70,
        flexDirection:'row',
        justifyContent:"space-evenly"
    },
    prompt:{
        width:50,
        borderRadius:5,
        marginHorizontal:5,
        height:50, 
        backgroundColor:"#fff"
    }
})
