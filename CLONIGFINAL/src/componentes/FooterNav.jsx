import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function FooterNav({ navigation, active = "home" }) {
  const iconColor = (name) => (active === name ? "#111" : "#737373");

  return (
    <View style={styles.container}>
      <TouchableOpacity accessibilityLabel="Inicio" onPress={() => navigation.navigate("Home")}>
        <Feather name="home" size={24} color={iconColor("home")} />
      </TouchableOpacity>
      <TouchableOpacity accessibilityLabel="Buscar"><Feather name="search" size={24} color={iconColor("search")} /></TouchableOpacity>
      <TouchableOpacity accessibilityLabel="Crear publicación"><Feather name="plus-square" size={24} color={iconColor("create")} /></TouchableOpacity>
      <TouchableOpacity accessibilityLabel="Actividad"><Feather name="heart" size={24} color={iconColor("activity")} /></TouchableOpacity>
      <TouchableOpacity accessibilityLabel="Ir al perfil" onPress={() => navigation.navigate("Profile")}>
        <Image source={{ uri: "https://i.pravatar.cc/150?img=12" }} style={[styles.avatar, active === "profile" && styles.activeAvatar]} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: "#e6e6e6", paddingVertical: 8, backgroundColor: "white" },
  avatar: { width: 26, height: 26, borderRadius: 13 },
  activeAvatar: { borderWidth: 1.5, borderColor: "#111" },
});
