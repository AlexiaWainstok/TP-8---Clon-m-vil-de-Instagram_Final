import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
// Importa componentes de React Native para mostrar listas, imágenes, estilos, botones y obtener el tamaño de la pantalla.

const IMAGE_SIZE = Dimensions.get("window").width / 3 - 2;
// Calcula el tamaño de cada imagen para que entren tres por fila.

export default function ProfileGrid({ data, navigation }) {
// Crea el componente ProfileGrid. Recibe la lista de publicaciones y la navegación.

  return (
    // Empieza el contenido que se va a mostrar.

    <FlatList
      data={data}
      // Usa la lista de publicaciones.

      keyExtractor={(item) => item.id}
      // Usa el id de cada publicación como identificador.

      numColumns={3}
      // Muestra 3 imágenes por fila.

      renderItem={({ item }) => (
        // Indica cómo se muestra cada publicación.

        <TouchableOpacity
          onPress={() => navigation.navigate("Detail", { post: item })}
        >
          {/* Al tocar una imagen, abre la pantalla de detalle. */}

          <Image
            source={{ uri: item.url }}
            style={styles.image}
          />
          {/* Muestra la imagen de la publicación. */}

        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  // Crea los estilos del componente.

  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    margin: 1,
  },
  // Define el tamaño y el espacio entre las imágenes.
});