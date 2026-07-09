import { View, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function FooterNav() {
  return (
    <View style={styles.container}>
      <Feather name="home" size={24} color="#000" />
      <Feather name="search" size={24} color="#777" />
      <Feather name="plus-square" size={24} color="#777" />
      <Feather name="heart" size={24} color="#777" />
      <Image
        source={{ uri: "https://i.pravatar.cc/150?img=12" }}
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderTopColor: "#e6e6e6",
    paddingVertical: 8,
    backgroundColor: "white",
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
});
