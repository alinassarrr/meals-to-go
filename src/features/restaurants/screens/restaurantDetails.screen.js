import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../utility/safeArea";
import { RestaurantInfoCard } from "../components/restaurant-infoCard";
import { List } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

export const RestaurantDetails = ({ route, navigation }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;

  const handleExit = () => {
    navigation.goBack();
  };
  const StyledItem = ({ title }) => {
    return <List.Item title={title} titleStyle={{ color: "purple" }} />;
  };
  return (
    <SafeArea>
      <View style={{ flex: 1 }}>
        {/* Restaurant Info */}
        <RestaurantInfoCard restaurant={restaurant} />

        {/* Scrollable Menu Section */}
        <ScrollView>
          {/* Exit Button */}
          <TouchableOpacity
            style={{ position: "absolute", top: 15, right: 15, zIndex: 1 }}
            onPress={handleExit}
          >
            <Ionicons name="close" size={30} color="purple" />
          </TouchableOpacity>
          <List.Section title="Menu">
            <List.Accordion
              title="Breakfast"
              titleStyle={breakfastExpanded ? { color: "tomato" } : undefined}
              left={(props) => (
                <List.Icon
                  {...props}
                  icon="bread-slice"
                  color={breakfastExpanded ? "tomato" : undefined}
                />
              )}
              expanded={breakfastExpanded}
              onPress={() => setBreakfastExpanded(!breakfastExpanded)}
            >
              <View style={{ backgroundColor: "white" }}>
                <StyledItem title="Pancakes" />
                <StyledItem title="Backed Eggs" />
              </View>
            </List.Accordion>

            <List.Accordion
              title="Lunch"
              titleStyle={lunchExpanded ? { color: "tomato" } : undefined}
              left={(props) => (
                <List.Icon
                  {...props}
                  icon="food"
                  color={lunchExpanded ? "tomato" : undefined}
                />
              )}
              expanded={lunchExpanded}
              onPress={() => setLunchExpanded(!lunchExpanded)}
            >
              <View style={{ backgroundColor: "white" }}>
                <StyledItem title="Burger" />
                <StyledItem title="Sandwich" />
              </View>
            </List.Accordion>

            <List.Accordion
              title="Dinner"
              titleStyle={dinnerExpanded ? { color: "tomato" } : undefined}
              left={(props) => (
                <List.Icon
                  {...props}
                  icon="food-variant"
                  color={dinnerExpanded ? "tomato" : undefined}
                />
              )}
              expanded={dinnerExpanded}
              onPress={() => setDinnerExpanded(!dinnerExpanded)}
            >
              <View style={{ backgroundColor: "white" }}>
                <StyledItem title="Steak" />
                <StyledItem title="Pasta" />
              </View>
            </List.Accordion>

            <List.Accordion
              title="Drinks"
              titleStyle={drinksExpanded ? { color: "tomato" } : undefined}
              left={(props) => (
                <List.Icon
                  {...props}
                  icon="cup"
                  color={drinksExpanded ? "tomato" : undefined}
                />
              )}
              expanded={drinksExpanded}
              onPress={() => setDrinksExpanded(!drinksExpanded)}
            >
              <View style={{ backgroundColor: "white" }}>
                <StyledItem title="Soda" />
                <StyledItem title="Water" />
              </View>
            </List.Accordion>
          </List.Section>
        </ScrollView>
      </View>
    </SafeArea>
  );
};
