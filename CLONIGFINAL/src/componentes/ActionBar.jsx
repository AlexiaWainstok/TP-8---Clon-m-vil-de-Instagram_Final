import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

export default function ActionBar({ liked, onToggleLike }) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity accessibilityLabel="Me gusta" onPress={onToggleLike}>
          {liked ? <AntDesign name="heart" size={27} color="#ed4956" /> : <Feather name="heart" size={27} color="#111" />}
        </TouchableOpacity>
        <TouchableOpacity accessibilityLabel="Comentar"><Feather name="message-circle" size={26} style={styles.icon} /></TouchableOpacity>
        <TouchableOpacity accessibilityLabel="Compartir"><Feather name="send" size={26} style={styles.icon} /></TouchableOpacity>
      </View>
      <TouchableOpacity accessibilityLabel="Guardar"><Feather name="bookmark" size={26} /></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 12, marginTop: 10, marginBottom: 8 },
  left: { flexDirection: "row", alignItems: "center" },
  icon: { marginLeft: 18 },
});
