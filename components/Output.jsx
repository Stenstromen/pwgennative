import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Output({ output }) {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 80
    },
    output: {
      borderWidth: 2,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
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
