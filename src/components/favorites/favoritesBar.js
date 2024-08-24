import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../../features/map/components/mapInfoCard";
import { CompactFavRestaurantInfo } from "./favoriteRestCard";

const FavoritesWrapper = styled.View`
  padding-right: 10px;
  padding-left: 10px;
`;
const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.title};
`;
export const FavoritesBar = ({ favorites, onDetailsNav }) => {
  if (!favorites.length) {
    return null;
  }
  return (
    <FavoritesWrapper>
      <Title>Favorites</Title>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((favRestaurant) => {
          const key = favRestaurant.name;
          return (
            <View
              key={key}
              style={{
                marginRight: 10,
                width: 100,
                height: 150,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  onDetailsNav("RestaurantDetail", {
                    restaurant: favRestaurant,
                  });
                }}
              >
                <CompactFavRestaurantInfo restaurant={favRestaurant} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
