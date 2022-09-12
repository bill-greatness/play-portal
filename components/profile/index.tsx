import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ProfileText, SubWithText } from "../texts";
import { BorderedButton } from "../buttons";

export const ProfileHeader = () => (
  <View style={styles.container}>
    <View style={styles.top}>
      <View style={styles.icons}>
        <Ionicons name="notifications" size={25} />
      </View>
      <View>
        <ProfileText greetings="Good Morning" username="Peniel" />
      </View>
      <View style={styles.icons}>
        <Ionicons name="person-circle" size={25} />
      </View>
    </View>
    <View style={styles.transactions}>
      <SubWithText text="ghs 223.31" subtext="Current balance" />
      <BorderedButton content="Transactions" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 10,
    width: "100%",
    flexDirection: "column",
  },
  transactions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop:15,
  },
  icons: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    position: "relative",
    backgroundColor: "#fff",
    display: "flex",
  },
  top: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    alignItems: "center",
    paddingHorizontal: 15,
  },
});
