import { FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfileGrid({ data, navigation }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={3}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail", { post: item })}
        >
          <Image
            source={{ uri: item.url }}
            style={styles.image}
          />
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 130,
    margin: 1,
  },
});