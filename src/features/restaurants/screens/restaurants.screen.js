// prettier-ignore
import { FlatList, Platform, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from "react";
import { RestaurantInfoCard } from "../components/restaurant-infoCard";
import styled from "styled-components";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import { SafeArea } from "../../../utility/safeArea";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  return (
    <SafeArea>
      {isLoading && (
        <View style={{ position: "absolute", top: "50%", left: "50%" }}>
          <ActivityIndicator
            size={50}
            animating={true}
            style={{ marginLeft: -25 }}
          />
        </View>
      )}
      <Search />
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
export default RestaurantsScreen;
