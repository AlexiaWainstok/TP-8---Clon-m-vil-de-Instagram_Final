import { useState } from "react";
// Importa useState para guardar y cambiar valores.

import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
// Importa componentes de React Native para mostrar elementos, imágenes, listas, botones y estilos.

export default function DetailScreen({ route }) {
// Crea el componente DetailScreen.

  const { post } = route.params;
  // Obtiene la publicación que llegó desde otra pantalla.

  const [liked, setLiked] = useState(false);
  // Guarda si el usuario dio "Me gusta". Empieza en false.

  const [likes, setLikes] = useState(120);
  // Guarda la cantidad de Me gusta. Empieza en 120.

  const comentarios = [
    { id: "1", texto: "Hermoso gato 😍" },
    { id: "2", texto: "Qué tierno 🐱" },
    { id: "3", texto: "Me encanta esta foto ❤️" },
  ];
  // Crea una lista con los comentarios.

  const toggleLike = () => {
  // Crea una función para cambiar el estado del Me gusta.

    if (liked) {
      // Si ya tenía Me gusta...

      setLiked(false);
      // Lo cambia a false.

      setLikes(likes - 1);
      // Resta un Me gusta.

    } else {
      // Si no tenía Me gusta...

      setLiked(true);
      // Lo cambia a true.

      setLikes(likes + 1);
      // Suma un Me gusta.
    }
  };

  return (
    // Empieza el contenido que se va a mostrar.

    <SafeAreaView style={styles.container}>
      {/* Contenedor principal de la pantalla. */}

      <Image source={{ uri: post.url }} style={styles.image} />
      {/* Muestra la imagen de la publicación. */}

      <TouchableOpacity onPress={toggleLike}>
        {/* Botón para dar o sacar Me gusta. */}

        <Text style={styles.like}>
          {liked ? "❤️" : "🤍"} {likes} Me gusta
        </Text>
        {/* Muestra el corazón y la cantidad de Me gusta. */}
      </TouchableOpacity>

      <Text style={styles.title}>Comentarios</Text>
      {/* Muestra el título "Comentarios". */}

      <FlatList
        data={comentarios}
        // Usa la lista de comentarios.

        keyExtractor={(item) => item.id}
        // Usa el id como identificador.

        renderItem={({ item }) => (
          <Text style={styles.comment}>{item.texto}</Text>
        )}
        // Muestra cada comentario de la lista.
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Crea los estilos del componente.

  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  // Define el fondo y el espacio interno de la pantalla.

  image: {
    width: "100%",
    height: 350,
    borderRadius: 10,
  },
  // Define el tamaño y los bordes redondeados de la imagen.

  like: {
    fontSize: 20,
    marginVertical: 15,
    fontWeight: "bold",
  },
  // Define el estilo del texto de Me gusta.

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  // Define el estilo del título.

  comment: {
    fontSize: 16,
    marginBottom: 10,
  },
  // Define el estilo de cada comentario.
});