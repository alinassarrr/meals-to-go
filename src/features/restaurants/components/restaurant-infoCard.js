import React from "react";
import { Text, View } from "react-native"; 
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import Lottie from "lottie-react-native";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Favorite } from "../../../components/favorites/favorite";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: 12px;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  /* font-family: ${(props) => props.theme.fonts.heading}; */
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[0]};
  padding-left: 20px;
  padding-bottom: 10px;
`;

const StarRow = styled.View`
  flex-direction: row;
`;

const Star = styled(Octicons)`
  margin-right: 5px;
`;

const Type = styled(Ionicons)`
  margin-right: 10px;
`;

const Row2 = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Status = styled.Text`
  margin-right: 10px;
  color: ${(props) =>
    props.isOpen ? props.theme.colors.ui.success : props.theme.colors.ui.error};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Al Shames Restaurant",
    icon = "restaurant",
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-s/17/1c/8e/f5/restaurant-al-shams-garden.jpg",
    ],
    address = "Nabae Anjar",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  const iconName = icon === "restaurant" ? "restaurant" : "cafe";

  return (
    <RestaurantCard>
      <Favorite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Row2>
          <View style={{ width: "60%" }}>
            <Title>{name}</Title>
          </View>
          {isClosedTemporarily ? (
            <Status style={{ color: "red" }}>Closed Temporarily</Status>
          ) : isOpenNow ? (
            <Status isOpen={isOpenNow}>Open Now</Status>
          ) : (
            <Status isOpen={isOpenNow}>Closed</Status>
          )}
        </Row2>
        <StarRow>
          {ratingArray.map((_, index) => (
            <Star key={index} name="star-fill" size={18} color="gold" />
          ))}
        </StarRow>
        <Row2>
          <Address>{address}</Address>
          <Type name={iconName} size={24} color="tomato" />
        </Row2>
      </Info>
    </RestaurantCard>
  );
};
