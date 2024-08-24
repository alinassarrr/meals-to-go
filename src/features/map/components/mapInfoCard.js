import React from "react";
import { View, Text, Platform } from "react-native";
import styled from "styled-components";
import WebView from "react-native-webview";
import Octicons from "react-native-vector-icons/Octicons";

const CompactImage = styled.Image`
  width: 120px;
  height: 100px;
`;
const CompactWebView = styled(WebView)`
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  max-width: 120px;
  align-items: center;
  border-radius: 80px;
`;

const Star = styled(Octicons)`
  margin-right: 5px;
`;
const StatusText = styled.Text`
  color: #d0421b;
  font-weight: bold;
`;

const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant = {} }) => {
  const Image = isAndroid ? CompactWebView : CompactImage;
  console.log(restaurant);
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text>{restaurant.name}</Text>
      <View style={{ flexDirection: "row" }}></View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "tomato",
            paddingHorizontal: 3,
            marginRight: 2,
          }}
        >
          <Star name="star-fill" size={15} color="gold" />
          <Text style={{ color: "white" }}>{restaurant.rating} </Text>
        </View>
        {restaurant.isClosedTemporarily ? (
          <StatusText style={{ fontSize: 12 }}>ClosedTemp</StatusText>
        ) : restaurant.isOpenNow ? (
          <StatusText style={{ color: "#138000" }}>Open Now</StatusText>
        ) : (
          <StatusText>Closed</StatusText>
        )}
      </View>
    </Item>
  );
};
