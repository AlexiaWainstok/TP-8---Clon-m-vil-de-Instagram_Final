# Clon Móvil de Instagram - Expo React Native

## Descripción
Proyecto de clon de Instagram desarrollado con React Native y Expo. El feed consume imágenes de gatos desde The Cat API y muestra una experiencia móvil con navegación entre feed, detalle de publicación y perfil.

## Instalación

1. `npm install`
2. `npx expo start`

## Estructura de carpetas

```
CLONIGFINAL/
  App.js
  app.json
  package.json
  README.md
  src/
    componentes/
      ActionBar.jsx
      Header.jsx
      PostCard.jsx
      ProfileGrid.jsx
      ProfileStats.jsx
    navigation/
      AppNavigator.jsx
    screens/
      DetailScreen.jsx
      HomeScreen.jsx
      ProfileScreen.jsx
    services/
      catApi.js
```

> Nota: Aunque el enunciado menciona una carpeta `app/`, en este proyecto la aplicación principal se organiza bajo `src/`.

## Desglose técnico de componentes

- `App.js`
  - Configura `NavigationContainer` y `StatusBar`.
- `src/navigation/AppNavigator.jsx`
  - Define la navegación principal con un `NativeStackNavigator` que contiene las pantallas `Home`, `Detail` y `Profile`.
- `src/screens/HomeScreen.jsx`
  - Consume la API de gatos mediante `useEffect` y `axios`.
  - Renderiza el feed con `FlatList` y cada ítem es un componente `PostCard`.
- `src/screens/DetailScreen.jsx`
  - Recibe el `post` desde la navegación.
  - Permite alternar el estado de "Me gusta" en pantalla con `useState`.
  - Muestra comentarios simulados en una `FlatList`.
- `src/screens/ProfileScreen.jsx`
  - Muestra datos de perfil estático y estadísticas dinámicas.
  - Carga posts de gatos para la cuadrícula de perfil.
- `src/componentes/PostCard.jsx`
  - Componente reutilizable que recibe `post` y `navigation` por props.
  - Incluye avatar, usuario, ubicación simulada, imagen del post, barra de acciones y caption.
- `src/componentes/ActionBar.jsx`
  - Barra de acciones interactiva con botón de "Me gusta" funcional.
- `src/componentes/ProfileGrid.jsx`
  - Renderiza la cuadrícula de imágenes del perfil con `FlatList` y `numColumns={3}`.
- `src/componentes/ProfileStats.jsx`
  - Presenta métricas de publicaciones, seguidores y seguidos.
- `src/services/catApi.js`
  - Define la petición a The Cat API con `axios`.

## Manejo de estados

- `HomeScreen.jsx`
  - `posts`: estado local que almacena los datos del feed.
- `DetailScreen.jsx`
  - `liked`: controla si el post fue marcado con "Me gusta".
  - `likes`: contador de me gusta que se actualiza en tiempo real.
- `ProfileScreen.jsx`
  - `posts`: datos que alimentan la cuadrícula del perfil.
- `ActionBar.jsx`
  - `liked`: estado local para alternar el icono de corazón.

## Consumo de API

- `src/services/catApi.js` realiza una llamada a `https://api.thecatapi.com/v1/images/search?limit=10`.
- Se cargan al menos 10 imágenes distintas para alimentar el feed y la cuadrícula del perfil.

## Activos del sistema

- `app.json` configura:
  - `icon`: `./assets/icon.png`
  - `splash.image`: `./assets/splash-icon.png`
  - `expo` metadata y `adaptiveIcon` para Android.
- `App.js` agrega `StatusBar` de `expo-status-bar` para estilizar la barra de estado.

## Navegación

- `Feed` → `Detail`: al presionar la imagen del post se navega a la pantalla de detalle, pasando `post` como parámetro.
- `Feed` → `Profile`: al presionar el header del post se navega al perfil.
- `Profile` → `Detail`: al presionar una imagen dentro de la cuadrícula se navega también al detalle.

## Referencia visual

- Diseño de Figma usado como guía: https://www.figma.com/design/goaDHE7egvJGkf4dtObYL8/Instagram-UI-kit---Tokens-and-Variants--Community-?node-id=1536-6872&t=qXBqqVFNQIFTY0hG-1
- Se han respetado los principios visuales de Instagram sin agregar elementos fuera del alcance del TP.

## Referencia visual

- Enlace Figma / capturas usadas como guía: **[AGREGAR AQUÍ EL ENLACE O CAPTURAS DE PANTALLA]**

## Observaciones

- Se utiliza `FlatList` para el feed y para la cuadrícula del perfil, cumpliendo la restricción de rendimiento.
- Todos los estilos se definen mediante `StyleSheet.create()`.
- Las interacciones táctiles se implementan con `TouchableOpacity`.
- El proyecto está listo para ejecutar con Expo.
