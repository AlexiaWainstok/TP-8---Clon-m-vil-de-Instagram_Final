import { SafeAreaView, StyleSheet, FlatList, View } from "react-native";
// Importa componentes de React Native para mostrar elementos, listas y estilos.

import { useEffect, useState } from "react";
// Importa useEffect y useState para manejar datos y ejecutar funciones.

import Header from "../componentes/Header";
// Importa el componente del encabezado.

import StoryBar from "../componentes/StoryBar";
// Importa el componente de historias.

import FooterNav from "../componentes/FooterNav";
// Importa el menú de navegación inferior.

import PostCard from "../componentes/PostCard";
// Importa el componente que muestra cada publicación.

import { getCats } from "../services/catApi";
// Importa la función que obtiene las imágenes de gatos.

export default function HomeScreen({ navigation }) {
// Crea el componente HomeScreen.

  const [posts, setPosts] = useState([]);
  // Guarda la lista de publicaciones. Empieza vacía.

  useEffect(() => {
    loadPosts();
  }, []);
  // Ejecuta loadPosts una sola vez cuando se abre la pantalla.

  const loadPosts = async () => {
    // Crea una función para cargar las publicaciones.

    try {
      // Intenta obtener los datos.

      const data = await getCats();
      // Espera la respuesta de la API.

      setPosts(data);
      // Guarda las publicaciones obtenidas.

    } catch (error) {
      // Si ocurre un error...

      console.log(error);
      // Lo muestra en la consola.
    }
  };

  return (
    // Empieza el contenido que se va a mostrar.

    <SafeAreaView style={styles.container}>
      {/* Contenedor principal de la pantalla. */}

      <Header />
      {/* Muestra el encabezado. */}

      <View style={styles.feedContainer}>
        {/* Contenedor de las publicaciones. */}

        <FlatList
          data={posts}
          // Usa la lista de publicaciones.

          keyExtractor={(item) => item.id}
          // Usa el id como identificador.

          ListHeaderComponent={<StoryBar />}
          // Agrega las historias arriba de las publicaciones.

          ListHeaderComponentStyle={{ backgroundColor: "white" }}
          // Define el fondo de las historias.

          renderItem={({ item }) => (
            <PostCard
              post={item}
              navigation={navigation}
            />
          )}
          // Muestra cada publicación usando PostCard.
        />
      </View>

      <FooterNav navigation={navigation} active="home" />
      {/* Muestra el menú de navegación inferior. */}

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

  feedContainer: {
    flex: 1,
  },
  // Hace que la lista de publicaciones ocupe el espacio disponible.
});