import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// Importa componentes de React Native para mostrar elementos, texto, imágenes, estilos y botones.

import { Feather } from "@expo/vector-icons";
// Importa los íconos que se van a usar.

import ActionBar from "./ActionBar";
// Importa el componente ActionBar para mostrar los botones de la publicación.

const AUTHORS = [
  { username: "michi.luna", name: "Luna Gómez", bio: "Gatos, café y fotos sin filtro.", followers: "12.4k", following: 301, avatar: "https://i.pravatar.cc/150?img=5" },
  { username: "bigotes.ba", name: "Sofi Martín", bio: "Rescatando michis en Buenos Aires.", followers: "7.890", following: 418, avatar: "https://i.pravatar.cc/150?img=9" },
  { username: "gatito.nube", name: "Nico Pérez", bio: "Una vida mejor con pelos de gato.", followers: "4.216", following: 189, avatar: "https://i.pravatar.cc/150?img=11" },
  { username: "patas.y.siesta", name: "Vale Ruiz", bio: "Fotos, siestas y mucho ronroneo.", followers: "9.102", following: 257, avatar: "https://i.pravatar.cc/150?img=32" },
  { username: "clubdelmichi", name: "Tomás Díaz", bio: "Contenido para amantes de los gatos.", followers: "15.8k", following: 502, avatar: "https://i.pravatar.cc/150?img=14" },
];
// Crea una lista con información de distintos usuarios.

export default function PostCard({ post, navigation }) {
// Crea el componente PostCard. Recibe la publicación y la navegación.

  const index = post.id.split("").reduce((total, character) => total + character.charCodeAt(0), 0) % AUTHORS.length;
  // Calcula un número para elegir un autor de la lista.

  const author = AUTHORS[index];
  // Guarda el autor que le corresponde a la publicación.

  return (
    // Empieza el contenido que se va a mostrar.

    <View style={styles.container}>
      {/* Contenedor principal de la publicación. */}

      <View style={styles.header}>
        {/* Encabezado de la publicación. */}

        <TouchableOpacity
          style={styles.userInfo}
          onPress={() =>
            navigation.navigate("UserProfile", {
              user: author,
              post,
            })
          }
        >
          {/* Botón para ir al perfil del usuario. */}

          <Image
            source={{
              uri: author.avatar,
            }}
            style={styles.avatar}
          />
          {/* Muestra la foto de perfil del autor. */}

          <View>
            {/* Contenedor del nombre y ubicación. */}

            <Text style={styles.username}>{author.username}</Text>
            {/* Muestra el nombre de usuario. */}

            <Text style={styles.location}>Buenos Aires, Argentina</Text>
            {/* Muestra la ubicación. */}
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          {/* Botón de más opciones. */}
          <Feather name="more-vertical" size={22} color="#333" />
          {/* Muestra el ícono de los tres puntos. */}
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        activeOpacity={0.95}
        onPress={() =>
          navigation.navigate("Detail", { post })
        }
      >
        {/* Botón para abrir el detalle de la publicación. */}

        <Image
          source={{ uri: post.url }}
          style={styles.postImage}
        />
        {/* Muestra la imagen de la publicación. */}
      </TouchableOpacity>

      <ActionBar />
      {/* Muestra los botones de Me gusta, comentar, compartir y guardar. */}

      <Text style={styles.likes}>124 Me gusta</Text>
      {/* Muestra la cantidad de Me gusta. */}

      <Text style={styles.caption}>
        {/* Muestra la descripción de la publicación. */}

        <Text style={styles.bold}>{author.username} </Text>
        {/* Muestra el nombre del autor en negrita. */}

        Disfrutando un hermoso día 😺
        {/* Texto de la descripción. */}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  // Crea los estilos del componente.

  container: {
    backgroundColor: "white",
    marginBottom: 18,
  },
  // Define el fondo y el espacio debajo de la publicación.

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  // Organiza el encabezado en una fila y separa los elementos.

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  // Coloca la foto y el nombre uno al lado del otro.

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  // Define el tamaño y la forma redonda de la foto.

  username: {
    fontWeight: "bold",
    fontSize: 14,
  },
  // Define el estilo del nombre de usuario.

  location: {
    fontSize: 11,
    color: "gray",
  },
  // Define el estilo de la ubicación.

  postImage: {
    width: "100%",
    height: 400,
  },
  // Define el tamaño de la imagen de la publicación.

  likes: {
    marginHorizontal: 12,
    fontWeight: "bold",
    marginTop: 5,
  },
  // Define el estilo del texto de Me gusta.

  caption: {
    marginHorizontal: 12,
    marginTop: 4,
    marginBottom: 8,
  },
  // Define el estilo de la descripción.

  bold: {
    fontWeight: "bold",
  },
  // Hace que el texto se vea en negrita.
});