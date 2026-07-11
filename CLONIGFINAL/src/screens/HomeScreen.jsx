import { SafeAreaView, StyleSheet, FlatList, View } from "react-native";
import { useEffect, useState } from "react";

import Header from "../componentes/Header";
import StoryBar from "../componentes/StoryBar";
import FooterNav from "../componentes/FooterNav";
import PostCard from "../componentes/PostCard";
import { getCats } from "../services/catApi";

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const data = await getCats();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.feedContainer}>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<StoryBar />}
          ListHeaderComponentStyle={{ backgroundColor: "white" }}
          renderItem={({ item }) => (
            <PostCard
              post={item}
              navigation={navigation}
            />
          )}
        />
      </View>

      <FooterNav navigation={navigation} active="home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  feedContainer: {
    flex: 1,
  },
});
