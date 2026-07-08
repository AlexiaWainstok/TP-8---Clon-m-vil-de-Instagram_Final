import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useEffect, useState } from "react";
import { getCats } from "../services/catApi";
import ProfileStats from "../componentes/ProfileStats";
import ProfileGrid from "../componentes/ProfileGrid";

export default function ProfileScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const data = await getCats();
    setPosts(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150" }}
          style={styles.avatar}
        />

        <ProfileStats
          posts={posts.length}
          followers={523}
          following={180}
        />
      </View>

      <Text style={styles.name}>Alexia</Text>

      <Text style={styles.bio}>
        Estudiante de Informática 💻
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text>Editar perfil</Text>
      </TouchableOpacity>

      <ProfileGrid
        data={posts}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 20,
  },

  name: {
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 20,
  },

  bio: {
    marginLeft: 20,
    color: "gray",
    marginBottom: 10,
  },

  button: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 15,
  },
});