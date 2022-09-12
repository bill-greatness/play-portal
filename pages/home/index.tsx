import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import Background from "../../components/background";
import { InputWithIcon } from "../../components/inputs";
import { ProfileHeader } from "../../components/profile";
import { styles } from "./styles";
import { BorderedButton } from "../../components/buttons";
import { SubWithText } from "../../components/texts";
import { GameTile } from "../../components/tiles";

const tempItems = [
  {
    label: "Some Text",
    value: "Some Value",
  },
  {
    label: "Some Text 2",
    value: "Some Value 2",
  },
  {
    label: "Some Text 3",
    value: "Some Value 3",
  },
];
export default function Home() {
  return (
    <Background>
      <View>
        <View>
          <ProfileHeader />
        </View>
        <ScrollView style={styles.scrollView}>
          <Image
            source={require("../../assets/images/ads.png")}
            style={styles.ads}
          />
          <InputWithIcon
            placeholder="Search Games"
            icon="search"
            onChange={(text) => {}}
          />

          {/* Available Games and Select */}
          <View style={defaultStyle.spaceBetween}>
            <Text style={defaultStyle.gameText}>Available Games</Text>

            <BorderedButton content="Available" icon="chevron-down" />
          </View>
          <View style={defaultStyle.tiles}>
            {[1, 2, 3, 4, 5, 6].map(idx => (
                <GameTile key={idx} />
            ))}
          </View>
        </ScrollView>
      </View>
    </Background>
  );
}

const defaultStyle = StyleSheet.create({
  gameText: {
    fontFamily: "bold",
    fontSize: 18,
    color: "#fff",
  },
  gamesTile: {
    paddingHorizontal: 5,
  },
  tiles: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  spaceBetween: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },


});
