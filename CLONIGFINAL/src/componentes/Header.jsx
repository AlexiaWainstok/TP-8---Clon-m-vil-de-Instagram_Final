import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Instagram</Text>

      <View style={styles.icons}>
        <Feather
          name="heart"
          size={25}
          style={styles.icon}
        />

        <Feather
          name="send"
          size={25}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "white",
  },

  logo: {
    fontSize: 30,
    fontWeight: "700",
  },

  icons: {
    flexDirection: "row",
  },

  icon: {
    marginRight: 20,
  },
});