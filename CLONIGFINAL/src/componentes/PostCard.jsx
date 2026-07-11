import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import ActionBar from "./ActionBar";

const AUTHORS = [
  { username: "michi.luna", name: "Luna Gómez", bio: "Gatos, café y fotos sin filtro.", followers: "12.4k", following: 301, avatar: "https://i.pravatar.cc/150?img=5" },
  { username: "bigotes.ba", name: "Sofi Martín", bio: "Rescatando michis en Buenos Aires.", followers: "7.890", following: 418, avatar: "https://i.pravatar.cc/150?img=9" },
  { username: "gatito.nube", name: "Nico Pérez", bio: "Una vida mejor con pelos de gato.", followers: "4.216", following: 189, avatar: "https://i.pravatar.cc/150?img=11" },
  { username: "patas.y.siesta", name: "Vale Ruiz", bio: "Fotos, siestas y mucho ronroneo.", followers: "9.102", following: 257, avatar: "https://i.pravatar.cc/150?img=32" },
  { username: "clubdelmichi", name: "Tomás Díaz", bio: "Contenido para amantes de los gatos.", followers: "15.8k", following: 502, avatar: "https://i.pravatar.cc/150?img=14" },
];

export default function PostCard({ post, navigation }) {
  const index = post.id.split("").reduce((total, character) => total + character.charCodeAt(0), 0) % AUTHORS.length;
  const author = AUTHORS[index];

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.userInfo}
          onPress={() =>
            navigation.navigate("UserProfile", {
              user: author,
              post,
            })
          }
        >
          <Image
            source={{
              uri: author.avatar,
            }}
            style={styles.avatar}
          />

          <View>
            <Text style={styles.username}>{author.username}</Text>
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
        <Text style={styles.bold}>{author.username} </Text>
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
