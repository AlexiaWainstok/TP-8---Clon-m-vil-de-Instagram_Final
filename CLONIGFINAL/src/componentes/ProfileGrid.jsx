import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const IMAGE_SIZE = Dimensions.get("window").width / 3 - 2;

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
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    margin: 1,
  },
});