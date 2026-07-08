import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import ActionBar from "./ActionBar";

export default function PostCard({ post, navigation }) {
  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          source={{
            uri: "https://i.pravatar.cc/150?img=12",
          }}
          style={styles.avatar}
        />

        <View>
          <Text style={styles.username}>cat_user</Text>
          <Text style={styles.location}>Buenos Aires, Argentina</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.95}
        onPress={() =>
          navigation.navigate("Detail", { post })
        }
      >
        <Image
          source={{ uri: post.url }}
          style={styles.postImage}
        />
      </TouchableOpacity>

      <ActionBar />

      <Text style={styles.likes}>124 Me gusta</Text>

      <Text style={styles.caption}>
        <Text style={styles.bold}>cat_user </Text>
        Disfrutando un hermoso día 😺
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 18,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  username: {
    fontWeight: "bold",
    fontSize: 14,
  },

  location: {
    fontSize: 11,
    color: "gray",
  },

  postImage: {
    width: "100%",
    height: 400,
  },

  likes: {
    marginHorizontal: 12,
    fontWeight: "bold",
    marginTop: 5,
  },

  caption: {
    marginHorizontal: 12,
    marginTop: 4,
    marginBottom: 8,
  },

  bold: {
    fontWeight: "bold",
  },
});