import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export default function ActionBar() {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          {liked ? (
            <AntDesign name="heart" size={27} color="red" />
          ) : (
            <Feather name="heart" size={27} color="black" />
          )}
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather
            name="message-circle"
            size={27}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather
            name="send"
            size={27}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Feather name="bookmark" size={27} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginTop: 10,
    marginBottom: 8,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    marginLeft: 18,
  },
});