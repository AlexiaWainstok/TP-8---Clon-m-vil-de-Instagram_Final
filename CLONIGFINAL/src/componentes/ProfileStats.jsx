import { View, Text, StyleSheet } from "react-native";
// Importa componentes de React Native para mostrar elementos, texto y estilos.

export default function ProfileStats({ posts, followers, following }) {
// Crea el componente ProfileStats. Recibe la cantidad de publicaciones, seguidores y seguidos.

  return (
    // Empieza el contenido que se va a mostrar.

    <View style={styles.container}>
      {/* Contenedor principal de las estadísticas. */}

      <View style={styles.item}>
        {/* Contenedor de publicaciones. */}

        <Text style={styles.number}>{posts}</Text>
        {/* Muestra la cantidad de publicaciones. */}

        <Text>Publicaciones</Text>
        {/* Muestra el texto "Publicaciones". */}
      </View>

      <View style={styles.item}>
        {/* Contenedor de seguidores. */}

        <Text style={styles.number}>{followers}</Text>
        {/* Muestra la cantidad de seguidores. */}

        <Text>Seguidores</Text>
        {/* Muestra el texto "Seguidores". */}
      </View>

      <View style={styles.item}>
        {/* Contenedor de seguidos. */}

        <Text style={styles.number}>{following}</Text>
        {/* Muestra la cantidad de personas seguidas. */}

        <Text>Seguidos</Text>
        {/* Muestra el texto "Seguidos". */}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  // Crea los estilos del componente.

  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  // Coloca las estadísticas en una fila y deja espacio arriba y abajo.

  item: {
    alignItems: "center",
  },
  // Centra el contenido de cada estadística.

  number: {
    fontWeight: "bold",
    fontSize: 18,
  },
  // Hace que los números se vean más grandes y en negrita.
});