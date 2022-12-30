import React from "react";
import { View, Text } from "react-native";

function Output({ output }) {
  return (
    <View style={{ width: "75%" }}>
      <Text>{output}</Text>
    </View>
  );
}

export default Output;
