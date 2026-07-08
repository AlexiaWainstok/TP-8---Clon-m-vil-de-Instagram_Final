import { View, Text, StyleSheet } from "react-native";

export default function ProfileStats({ posts, followers, following }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.number}>{posts}</Text>
        <Text>Publicaciones</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.number}>{followers}</Text>
        <Text>Seguidores</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.number}>{following}</Text>
        <Text>Seguidos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },

  item: {
    alignItems: "center",
  },

  number: {
    fontWeight: "bold",
    fontSize: 18,
  },
});