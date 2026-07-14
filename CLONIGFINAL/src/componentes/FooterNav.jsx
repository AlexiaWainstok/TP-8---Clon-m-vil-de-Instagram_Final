import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
// Importa componentes de React Native para mostrar elementos, imágenes, estilos y botones.

import { Feather } from "@expo/vector-icons";
// Importa los íconos que se van a usar.

export default function FooterNav({ navigation, active = "home" }) {
// Crea el componente FooterNav. Recibe la navegación y la pantalla activa.

  const iconColor = (name) => (active === name ? "#111" : "#737373");
  // Cambia el color del ícono según si está activo o no.

  return (
    // Empieza el contenido que se va a mostrar.

    <View style={styles.container}>
      {/* Contenedor principal de la barra de navegación. */}

      <TouchableOpacity accessibilityLabel="Inicio" onPress={() => navigation.navigate("Home")}>
        {/* Botón para ir a la pantalla de inicio. */}
        <Feather name="home" size={24} color={iconColor("home")} />
        {/* Muestra el ícono de inicio. */}
      </TouchableOpacity>

      <TouchableOpacity accessibilityLabel="Buscar">
        {/* Botón de buscar. */}
        <Feather name="search" size={24} color={iconColor("search")} />
        {/* Muestra el ícono de búsqueda. */}
      </TouchableOpacity>

      <TouchableOpacity accessibilityLabel="Crear publicación">
        {/* Botón para crear una publicación. */}
        <Feather name="plus-square" size={24} color={iconColor("create")} />
        {/* Muestra el ícono de crear. */}
      </TouchableOpacity>

      <TouchableOpacity accessibilityLabel="Actividad">
        {/* Botón de actividad. */}
        <Feather name="heart" size={24} color={iconColor("activity")} />
        {/* Muestra el ícono de actividad. */}
      </TouchableOpacity>

      <TouchableOpacity accessibilityLabel="Ir al perfil" onPress={() => navigation.navigate("Profile")}>
        {/* Botón para ir al perfil. */}
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          style={[styles.avatar, active === "profile" && styles.activeAvatar]}
        />
        {/* Muestra la foto de perfil y le agrega un borde si está activa. */}
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  // Crea los estilos del componente.

  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#e6e6e6",
    paddingVertical: 8,
    backgroundColor: "white",
  },
  // Organiza los botones en una fila y agrega un borde arriba.

  avatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
  // Define el tamaño y la forma redonda de la foto de perfil.

  activeAvatar: {borderWidth: 1.5,borderColor: "#111",},
  // Agrega un borde a la foto cuando el perfil está activo.
});