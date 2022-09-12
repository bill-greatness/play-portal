import { View, Image, TextInput } from "react-native";
import { TextWithSub } from "../../components/texts";
import { styles } from "./styles";
import { Ionicons as Ion } from "@expo/vector-icons";
import { TextButton } from "../../components/buttons";
import Background from "../../components/background";

export default function OnBoarding() {
  return (
    <Background>
      <View style={styles.container}>
        <Image
          style={{ ...styles.screenImage, resizeMode: "contain" }}
          source={require("../../assets/images/cover-screen.png")}
        />
        <TextWithSub
          text="Before Your Adventure"
          subtext="We need you to provide some basic info to help us get you started"
        />
        <View style={styles.singleInput}>
          {/* Input for phone Number */}
          <View style={styles.input}>
            <Ion style={styles.inputIcon} name="md-call-outline" size={20} />
            <TextInput placeholder="Enter your phone number" style={styles.phoneInput} />
          </View>

          <TextButton content="Next" onPress={() => {}} />

        </View>
      </View>
    </Background>
  );
}
