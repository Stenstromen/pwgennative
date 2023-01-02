import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Output({ output }) {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 80
    },
    output: {
      borderWidth: 2,
      borderRadius: 20,
      padding: 10,
      width: 320,
      textAlign: "center",
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.output}>{output}</Text>
    </View>
  );
}

export default Output;
