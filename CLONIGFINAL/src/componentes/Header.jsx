import { View, Text, StyleSheet } from "react-native";
// Importa componentes de React Native para mostrar elementos, texto y estilos.

import { Feather } from "@expo/vector-icons";
// Importa los íconos que se van a usar.

export default function Header() {
// Crea el componente Header.

  return (
    // Empieza el contenido que se va a mostrar.

    <View style={styles.container}>
      {/* Contenedor principal del encabezado. */}

      <Text style={styles.logo}>Instagram</Text>
      {/* Muestra el nombre de Instagram. */}

      <View style={styles.icons}>
        {/* Contenedor para los íconos. */}

        <Feather
          name="heart"
          size={25}
          style={styles.icon}
        />
        {/* Muestra el ícono de corazón. */}

        <Feather
          name="send"
          size={25}
        />
        {/* Muestra el ícono de enviar. */}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Crea los estilos del componente.

  container: {
    height: 60,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  // Organiza los elementos en una fila, los separa y agrega un borde abajo.

  logo: {
    fontSize: 30,
    fontWeight: "700",
  },
  // Define el tamaño y el grosor del texto "Instagram".

  icons: {
    flexDirection: "row",
  },
  // Coloca los íconos uno al lado del otro.

  icon: {
    marginRight: 20,
  },
  // Agrega un espacio a la derecha del primer ícono.
});