import MapView from "react-native-maps";
import React from "react";
import { StyleSheet, View } from "react-native";
import styled from "styled-components";
import { Search } from "../components/searchMap";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Search />
      <Map />
    </View>
  );
};
