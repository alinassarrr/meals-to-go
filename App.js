// App.js
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/Theme";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswalLoaded] = useFonts({ Oswald_400Regular });
  const [latoLoaded] = useFonts({ Lato_400Regular });

  if (!oswalLoaded || !latoLoaded) {
    return null;
  }
  const TabIcon = {
    Restaurants: "fast-food-outline",
    Map: "map-outline",
    Settings: "settings-outline",
  };
  const tabBarIcon = ({ size, color }) => {
    return <Ionicons name={iconName} size={size} color={color} />;
  };

  const createScreenOptions = ({ route }) => {
    const iconName = TabIcon[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} color={color} size={size} />
      ),
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
      tabBarIconStyle: {
        marginTop: 1,
      },
      tabBarLabelStyle: {
        marginBottom: 5,
      },
      tabBarStyle: {
        height: 54,
      },
    };
  };

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={createScreenOptions}>
          <Tab.Screen
            name="Restaurants"
            component={RestaurantsScreen}
            options={{ headerShown: false }}
          ></Tab.Screen>
          <Tab.Screen
            name="Map"
            component={RestaurantsScreen}
            options={{ headerShown: false }}
          ></Tab.Screen>
          <Tab.Screen
            name="Settings"
            component={RestaurantsScreen}
            options={{ headerShown: false }}
          ></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
