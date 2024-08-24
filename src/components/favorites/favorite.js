import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { FavoritesContext } from "../../services/favorites/favorites.context";
import styled from "styled-components";

const FavoriteButton = styled(TouchableOpacity)`
  background-color: transparent;
  position: absolute;
  top: 22px;
  z-index: 10;
  right: 22px;
`;
export const Favorite = ({ restaurant }) => {
  const { favorites, addToFav, removeFav } = useContext(FavoritesContext);
  const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId); //exist or not
  return (
    <FavoriteButton
      onPress={() =>
        !isFavorite ? addToFav(restaurant) : removeFav(restaurant)
      }
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        color="tomato"
        size={32}
      />
    </FavoriteButton>
  );
};
