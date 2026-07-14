import { useEffect, useState } from "react";
// Importa useEffect y useState para manejar datos y ejecutar funciones.

import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// Importa componentes de React Native para mostrar elementos, imágenes, texto, botones y estilos.

import { getCats } from "../services/catApi";
// Importa la función que obtiene las imágenes de gatos.

import ProfileStats from "../componentes/ProfileStats";
// Importa el componente de estadísticas del perfil.

import ProfileGrid from "../componentes/ProfileGrid";
// Importa el componente que muestra las publicaciones.

export default function UserProfileScreen({ route, navigation }) {
// Crea el componente UserProfileScreen.

  const { user, post } = route.params;
  // Obtiene los datos del usuario y la publicación recibidos desde otra pantalla.

  const [posts, setPosts] = useState(post ? [post] : []);
  // Guarda las publicaciones. Si recibió una publicación, la agrega primero.

  const [following, setFollowing] = useState(false);
  // Guarda si el usuario está siendo seguido. Empieza en false.

  useEffect(() => {
    // Se ejecuta cuando cambia la publicación.

    const loadPosts = async () => {
      // Crea una función para cargar las publicaciones.

      try {
        // Intenta obtener los datos.

        const data = await getCats();
        // Obtiene las publicaciones desde la API.

        setPosts(post ? [post, ...data.filter((item) => item.id !== post.id)] : data);
        // Guarda las publicaciones, dejando primero la publicación recibida.

      } catch (error) {
        // Si ocurre un error...

        // Se conserva la publicación recibida si la API no está disponible.
      }
    };

    loadPosts();
    // Ejecuta la función para cargar las publicaciones.

  }, [post]);

  return (
    // Empieza el contenido que se va a mostrar.

    <SafeAreaView style={styles.container}>
      {/* Contenedor principal de la pantalla. */}

      <View style={styles.header}>
        {/* Contenedor del encabezado del perfil. */}

        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        {/* Muestra la foto del usuario. */}

        <ProfileStats
          posts={posts.length}
          followers={user.followers}
          following={user.following}
        />
        {/* Muestra las estadísticas del perfil. */}
      </View>

      <Text style={styles.name}>{user.name}</Text>
      {/* Muestra el nombre del usuario. */}

      <Text style={styles.bio}>{user.bio}</Text>
      {/* Muestra la biografía del usuario. */}

      <TouchableOpacity
        style={[styles.button, following && styles.followingButton]}
        onPress={() => setFollowing((value) => !value)}
      >
        {/* Botón para seguir o dejar de seguir al usuario. */}

        <Text style={[styles.buttonText, following && styles.followingButtonText]}>
          {following ? "Siguiendo" : "Seguir"}
        </Text>
        {/* Cambia el texto según si lo sigue o no. */}
      </TouchableOpacity>

      <ProfileGrid
        data={posts}
        navigation={navigation}
      />
      {/* Muestra la grilla de publicaciones. */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Crea los estilos del componente.

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  // Hace que la pantalla ocupe todo el espacio y tenga fondo blanco.

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  // Coloca la foto y las estadísticas en una fila.

  avatar: {
    width: 86,
    height: 86,
    borderRadius: 43,
    marginRight: 18,
  },
  // Define el tamaño y la forma redonda de la foto.

  name: {
    marginHorizontal: 20,
    fontSize: 15,
    fontWeight: "700",
  },
  // Define el estilo del nombre.

  bio: {
    marginHorizontal: 20,
    marginTop: 4,
    marginBottom: 12,
    color: "#262626",
  },
  // Define el estilo de la biografía.

  button: {
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
    backgroundColor: "#0095f6",
  },
  // Define el estilo del botón "Seguir".

  followingButton: {
    backgroundColor: "#efefef",
  },
  // Cambia el color del botón cuando ya lo sigue.

  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
  // Define el estilo del texto del botón.

  followingButtonText: {
    color: "#262626",
  },
  // Cambia el color del texto cuando ya lo sigue.
});