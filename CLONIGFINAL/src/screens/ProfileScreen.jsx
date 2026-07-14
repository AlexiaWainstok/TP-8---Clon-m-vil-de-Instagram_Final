import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// Importa componentes de React Native para mostrar elementos, imágenes, texto, botones y estilos.

import { useEffect, useState } from "react";
// Importa useEffect y useState para manejar datos y ejecutar funciones.

import { getCats } from "../services/catApi";
// Importa la función que obtiene las imágenes de gatos.

import ProfileStats from "../componentes/ProfileStats";
// Importa el componente de estadísticas del perfil.

import ProfileGrid from "../componentes/ProfileGrid";
// Importa el componente que muestra las publicaciones.

export default function ProfileScreen({ navigation }) {
// Crea el componente ProfileScreen.

  const [posts, setPosts] = useState([]);
  // Guarda la lista de publicaciones. Empieza vacía.

  useEffect(() => {
    loadPosts();
  }, []);
  // Ejecuta loadPosts una sola vez al abrir la pantalla.

  const loadPosts = async () => {
    // Crea una función para cargar las publicaciones.

    const data = await getCats();
    // Obtiene las publicaciones desde la API.

    setPosts(data);
    // Guarda las publicaciones obtenidas.
  };

  return (
    // Empieza el contenido que se va a mostrar.

    <SafeAreaView style={styles.container}>
      {/* Contenedor principal de la pantalla. */}

      <View style={styles.header}>
        {/* Contenedor del encabezado del perfil. */}

        <Image
          source={{ uri: "https://i.pravatar.cc/150" }}
          style={styles.avatar}
        />
        {/* Muestra la foto de perfil. */}

        <ProfileStats
          posts={posts.length}
          followers={523}
          following={180}
        />
        {/* Muestra las estadísticas del perfil. */}
      </View>

      <Text style={styles.name}>Alexia</Text>
      {/* Muestra el nombre del usuario. */}

      <Text style={styles.bio}>
        Estudiante de Informática 💻
      </Text>
      {/* Muestra la biografía del usuario. */}

      <TouchableOpacity style={styles.button}>
        {/* Botón para editar el perfil. */}

        <Text>Editar perfil</Text>
        {/* Muestra el texto del botón. */}
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
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 20,
  },
  // Define el tamaño y la forma redonda de la foto de perfil.

  name: {
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  // Define el estilo del nombre del usuario.

  bio: {
    marginLeft: 20,
    color: "gray",
    marginBottom: 10,
  },
  // Define el estilo de la biografía.

  button: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 15,
  },
  // Define el estilo del botón "Editar perfil".
});