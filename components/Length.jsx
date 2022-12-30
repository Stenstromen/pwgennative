import React from "react";
import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, View, Text } from "react-native";

function Length({ pwLength, setPwLength }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      alignItems: "stretch",
      justifyContent: "center",
    },
  });
  
  return (
    <View >
      <Slider
      minimumValue={4}
      maximumValue={32}
        value={pwLength}
        onValueChange={(e) => setPwLength(Math.floor(e))}
      />
      <Text>Value: {pwLength}</Text>
    </View>
  );
}

export default Length;
