// App.js
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/Theme";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { restaurantRequest } from "./src/services/restaurants/restaurants.services";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation/app.navigator";

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswalLoaded] = useFonts({ Oswald_400Regular });
  const [latoLoaded] = useFonts({ Lato_400Regular });

  if (!oswalLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Navigation />
        </RestaurantContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}
