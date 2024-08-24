import React from "react";
import { View, Text, Platform } from "react-native";
import styled from "styled-components";
import WebView from "react-native-webview";
import Octicons from "react-native-vector-icons/Octicons";

const CompactImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const Item = styled.View`
  align-items: center;
  border-radius: 40px;
  align-items: center;
`;
const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const CompactFavRestaurantInfo = ({ restaurant = {} }) => {
  const Image = CompactImage;
  console.log(restaurant);
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Title>{restaurant.name}</Title>
    </Item>
  );
};
