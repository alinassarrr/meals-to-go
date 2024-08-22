import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RestaurantsNavigator } from "./restaurant.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();

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

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsNavigator}
          options={{ headerShown: false }}
        ></Tab.Screen>
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: false }}
        ></Tab.Screen>
        <Tab.Screen
          name="Settings"
          component={RestaurantsScreen}
          options={{ headerShown: false }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
