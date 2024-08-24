import React from "react";
import { View, Text } from "react-native";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-infoCard";
import { CompactRestaurantInfo } from "./mapInfoCard";

export const MapCallout = ({ restaurant }) => {
  return (
    <View style={{ border: 2, borderRadius: 10 }}>
      <CompactRestaurantInfo restaurant={restaurant} />
    </View>
  );
};
