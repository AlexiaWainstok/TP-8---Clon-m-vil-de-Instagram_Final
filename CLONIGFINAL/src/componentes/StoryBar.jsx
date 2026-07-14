import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
// Importa componentes de React Native para mostrar una lista desplazable, elementos, texto, imágenes y estilos.

const stories = [
  { id: "1", name: "Tu historia", uri: "https://i.pravatar.cc/150?img=3" },
  { id: "2", name: "pepe", uri: "https://i.pravatar.cc/150?img=5" },
  { id: "3", name: "maria", uri: "https://i.pravatar.cc/150?img=7" },
  { id: "4", name: "ana", uri: "https://i.pravatar.cc/150?img=8" },
  { id: "5", name: "juli", uri: "https://i.pravatar.cc/150?img=12" },
];
// Crea una lista con las historias que se van a mostrar.

export default function StoryBar() {
// Crea el componente StoryBar.

  return (
    // Empieza el contenido que se va a mostrar.

    <View style={styles.container}>
      {/* Contenedor principal de las historias. */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* Crea una lista que se puede mover hacia los costados y oculta la barra de desplazamiento. */}

        {stories.map((story) => (
          // Recorre la lista de historias para mostrarlas una por una.

          <View key={story.id} style={styles.story}>
            {/* Contenedor de una historia. */}

            <View style={styles.avatarBorder}>
              {/* Contenedor que agrega el borde de la historia. */}

              <Image
                source={{ uri: story.uri }}
                style={styles.avatar}
              />
              {/* Muestra la foto de la historia. */}

            </View>

            <Text style={styles.name}>{story.name}</Text>
            {/* Muestra el nombre del usuario. */}

          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // Crea los estilos del componente.

  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#e6e6e6",
    paddingVertical: 10,
    backgroundColor: "white",
  },
  // Agrega un borde abajo, espacio y fondo blanco.

  scroll: {
    paddingHorizontal: 12,
  },
  // Agrega espacio a los costados de la lista.

  story: {
    alignItems: "center",
    marginRight: 16,
  },
  // Centra cada historia y deja espacio entre ellas.

  avatarBorder: {
    borderWidth: 2,
    borderColor: "#c13584",
    borderRadius: 42,
    padding: 3,
  },
  // Agrega el borde de color alrededor de la foto.

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  // Define el tamaño y la forma redonda de la foto.

  name: {
    marginTop: 6,
    fontSize: 12,
    color: "#333",
  },
  // Define el estilo del nombre del usuario.
});