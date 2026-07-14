import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Importa la navegación por pantallas.

import HomeScreen from "../screens/HomeScreen";
// Importa la pantalla principal.

import DetailScreen from "../screens/DetailScreen";
// Importa la pantalla del detalle de la publicación.

import ProfileScreen from "../screens/ProfileScreen";
// Importa la pantalla del perfil.

import UserProfileScreen from "../screens/UserProfileScreen";
// Importa la pantalla del perfil de otro usuario.

const Stack = createNativeStackNavigator();
// Crea el sistema de navegación entre pantallas.

export default function AppNavigator() {
// Crea el componente que controla la navegación.

  return (
    // Empieza el contenido que se va a mostrar.

    <Stack.Navigator>
      {/* Contenedor principal de las pantallas. */}

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      {/* Agrega la pantalla principal y oculta el encabezado. */}

      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: "Publicación" }}
      />
      {/* Agrega la pantalla del detalle con el título "Publicación". */}

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Perfil" }}
      />
      {/* Agrega la pantalla del perfil con el título "Perfil". */}

      <Stack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={({ route }) => ({ title: route.params.user.username })}
      />
      {/* Agrega la pantalla del perfil de otro usuario y muestra su nombre como título. */}

    </Stack.Navigator>
  );
}