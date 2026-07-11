import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import ActionBar from "./ActionBar";

export default function PostCard({ post, navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.userInfo}
          onPress={() =>
            navigation.navigate("UserProfile", {
              user: {
                username: "cat_user",
                name: "Cat Lover",
                avatar: "https://i.pravatar.cc/150?img=12",
                bio: "Fotos de gatos, siestas y bigotes.",
                followers: "8.432",
                following: 329,
              },
              post,
            })
          }
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

        <TouchableOpacity>
          <Feather name="more-vertical" size={22} color="#333" />
        </TouchableOpacity>
      </View>

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
    justifyContent: "space-between",
    padding: 12,
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
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
