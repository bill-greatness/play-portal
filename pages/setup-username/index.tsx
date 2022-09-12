import { View, Image, TextInput } from "react-native";
import { TextWithSub } from "../../components/texts";
import { styles } from "../onboarding/styles";
import { Ionicons as Ion } from "@expo/vector-icons";
import { TextButton } from "../../components/buttons";
import Background from "../../components/background";

export default function UsernameSetup() {
  return (
    <Background>
      <View style={styles.container}>
        <Image
          style={{ ...styles.screenImage, resizeMode: "contain" }}
          source={require("../../assets/images/cover-screen.png")}
        />
        <TextWithSub
          text="What's your Username"
          subtext="The username you provide will be visible be your friends and those you follow"
        />
        <View style={styles.singleInput}>
          {/* Input for username */}
          <View style={styles.input}>
            <Ion style={styles.inputIcon} name="person-outline" size={20} />
            <TextInput placeholder="Jane Done" style={styles.phoneInput} />
          </View>

          <TextButton content="Finish" onPress={() => {}} />

        </View>
      </View>
    </Background>
  );
}
