import { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { getCats } from "../services/catApi";
import ProfileStats from "../componentes/ProfileStats";
import ProfileGrid from "../componentes/ProfileGrid";

export default function UserProfileScreen({ route, navigation }) {
  const { user, post } = route.params;
  const [posts, setPosts] = useState(post ? [post] : []);
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await getCats();
        setPosts(post ? [post, ...data.filter((item) => item.id !== post.id)] : data);
      } catch (error) {
        // Se conserva la publicación recibida si la API no está disponible.
      }
    };
    loadPosts();
  }, [post]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <ProfileStats posts={posts.length} followers={user.followers} following={user.following} />
      </View>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
      <TouchableOpacity style={[styles.button, following && styles.followingButton]} onPress={() => setFollowing((value) => !value)}>
        <Text style={[styles.buttonText, following && styles.followingButtonText]}>{following ? "Siguiendo" : "Seguir"}</Text>
      </TouchableOpacity>
      <ProfileGrid data={posts} navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { flexDirection: "row", alignItems: "center", padding: 20 },
  avatar: { width: 86, height: 86, borderRadius: 43, marginRight: 18 },
  name: { marginHorizontal: 20, fontSize: 15, fontWeight: "700" },
  bio: { marginHorizontal: 20, marginTop: 4, marginBottom: 12, color: "#262626" },
  button: { marginHorizontal: 20, marginBottom: 16, borderRadius: 8, paddingVertical: 8, alignItems: "center", backgroundColor: "#0095f6" },
  followingButton: { backgroundColor: "#efefef" },
  buttonText: { color: "#fff", fontWeight: "700" },
  followingButtonText: { color: "#262626" },
});
