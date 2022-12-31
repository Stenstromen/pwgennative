import React from "react";
import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, View, Text } from "react-native";

function Length({ pwLength, setPwLength }) {
  const styles = StyleSheet.create({
    container: {
      width: 320,
      alignItems: "stretch",
      justifyContent: "center",
      paddingBottom: 10,
      paddingTop: 20
    },
    text: {
      alignItems: "center",
      textAlign: "center",
      width: 300,
    },
  });

  return (
    <View style={styles.container}>
      <Slider
        minimumValue={4}
        maximumValue={32}
        value={pwLength}
        onValueChange={(e) => setPwLength(Math.floor(e))}
      />
      <Text style={styles.text}>{pwLength} Characters</Text>
    </View>
  );
}

export default Length;
