import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import ProfileScreen from "../screens/ProfileScreen";
import UserProfileScreen from "../screens/UserProfileScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: "Publicación" }}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Perfil" }}
      />

      <Stack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={({ route }) => ({ title: route.params.user.username })}
      />

    </Stack.Navigator>
  );
}
