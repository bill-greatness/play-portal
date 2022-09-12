import { View, ScrollView } from "react-native";
import Background from "../../components/background";
import { BorderedButton } from "../../components/buttons";
import { InputWithIcon } from "../../components/inputs";
import { FriendTile } from "../../components/tiles";
import { styles } from "./style";

export default function Friends() {
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={{ width: "75%" }}>
            <InputWithIcon
              icon="search"
              placeholder="Search Friends"
              onChange={() => {}}
            />
          </View>
          <BorderedButton content="Import" />
        </View>
        <ScrollView>
            <FriendTile />
        </ScrollView>
      </View>
    </Background>
  );
}
