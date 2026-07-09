import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

const stories = [
  { id: "1", name: "Tu historia", uri: "https://i.pravatar.cc/150?img=3" },
  { id: "2", name: "pepe", uri: "https://i.pravatar.cc/150?img=5" },
  { id: "3", name: "maria", uri: "https://i.pravatar.cc/150?img=7" },
  { id: "4", name: "ana", uri: "https://i.pravatar.cc/150?img=8" },
  { id: "5", name: "juli", uri: "https://i.pravatar.cc/150?img=12" },
];

export default function StoryBar() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {stories.map((story) => (
          <View key={story.id} style={styles.story}>
            <View style={styles.avatarBorder}>
              <Image
                source={{ uri: story.uri }}
                style={styles.avatar}
              />
            </View>
            <Text style={styles.name}>{story.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#e6e6e6",
    paddingVertical: 10,
    backgroundColor: "white",
  },
  scroll: {
    paddingHorizontal: 12,
  },
  story: {
    alignItems: "center",
    marginRight: 16,
  },
  avatarBorder: {
    borderWidth: 2,
    borderColor: "#c13584",
    borderRadius: 42,
    padding: 3,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  name: {
    marginTop: 6,
    fontSize: 12,
    color: "#333",
  },
});
