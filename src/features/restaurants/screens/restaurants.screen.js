// prettier-ignore
import { FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from "react";
import { RestaurantInfoCard } from "../components/restaurant-infoCard";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../utility/safeArea";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder={"Search"} inputStyle={{ color: "#000" }} />
    </SearchContainer>
    <FlatList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
      keyExtractor={(item) => item.name}
      renderItem={() => <RestaurantInfoCard />}
      contentContainerStyle={{ padding: 16 }}
    />
  </SafeArea>
);
export default RestaurantsScreen;
