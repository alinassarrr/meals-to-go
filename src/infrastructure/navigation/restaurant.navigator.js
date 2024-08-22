import React from "react";
import { View, Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetails } from "../../features/restaurants/screens/restaurantDetails.screen";

const RestaurantStack = createStackNavigator();
export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        presentation: "modal",
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
        options={{ headerShown: false }}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetails}
        options={{ headerShown: false }}
      />
    </RestaurantStack.Navigator>
  );
};
