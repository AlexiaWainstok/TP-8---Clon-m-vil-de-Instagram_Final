import { View, StyleSheet, TouchableOpacity } from "react-native";
// Importa componentes de React Native para mostrar elementos, agregar estilos y crear botones.

import { Feather, AntDesign } from "@expo/vector-icons";
// Importa los íconos que se van a usar.

import { useState } from "react";
// Importa useState para guardar y cambiar un valor.

export default function ActionBar() {
// Crea el componente ActionBar.

  const [liked, setLiked] = useState(false);
  // Guarda si el usuario dio "Me gusta". Empieza en false (no le dio).

  return (
    // Empieza el contenido que se va a mostrar.

    <View style={styles.container}>
      {/* Contenedor principal con sus estilos. */}

      <View style={styles.left}>
        {/* Contenedor para los botones de la izquierda. */}

        <TouchableOpacity accessibilityLabel="Me gusta" onPress={() => setLiked((value) => !value)}>
          {/* Botón de "Me gusta". Al tocarlo cambia entre true y false. */}

          {liked ? <AntDesign name="heart" size={27} color="#ed4956" /> : <Feather name="heart" size={27} color="#111" />}
          {/* Si liked es true muestra un corazón rojo, si no muestra uno negro. */}
        </TouchableOpacity>

        <TouchableOpacity accessibilityLabel="Comentar">
          {/* Botón para comentar. */}
          <Feather name="message-circle" size={26} style={styles.icon} />
          {/* Muestra el ícono de comentario. */}
        </TouchableOpacity>

        <TouchableOpacity accessibilityLabel="Compartir">
          {/* Botón para compartir. */}
          <Feather name="send" size={26} style={styles.icon} />
          {/* Muestra el ícono de enviar. */}
        </TouchableOpacity>

      </View>

      <TouchableOpacity accessibilityLabel="Guardar">
        {/* Botón para guardar la publicación. */}
        <Feather name="bookmark" size={26} />
        {/* Muestra el ícono de guardar. */}
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  // Crea los estilos del componente.

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginTop: 10,
    marginBottom: 8,
  },
  // Coloca los elementos en una fila, los separa y agrega márgenes.

  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  // Coloca los botones de la izquierda en una fila y los centra.

  icon: {
    marginLeft: 18,
  },
  // Agrega un espacio a la izquierda de algunos íconos.
});