import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function DetailScreen({ route }) {
  const { post } = route.params;

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(120);

  const comentarios = [
    { id: "1", texto: "Hermoso gato 😍" },
    { id: "2", texto: "Qué tierno 🐱" },
    { id: "3", texto: "Me encanta esta foto ❤️" },
  ];

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: post.url }} style={styles.image} />

      <TouchableOpacity onPress={toggleLike}>
        <Text style={styles.like}>
          {liked ? "❤️" : "🤍"} {likes} Me gusta
        </Text>
      </TouchableOpacity>

      <Text style={styles.title}>Comentarios</Text>

      <FlatList
        data={comentarios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.comment}>{item.texto}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },

  image: {
    width: "100%",
    height: 350,
    borderRadius: 10,
  },

  like: {
    fontSize: 20,
    marginVertical: 15,
    fontWeight: "bold",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  comment: {
    fontSize: 16,
    marginBottom: 10,
  },
});