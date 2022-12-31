import React from "react";
import { StyleSheet, View, Text, Switch } from "react-native";

function Options({
  capLetters,
  setCapLetters,
  letters,
  setLetters,
  numbers,
  setNumbers,
  symbols,
  setSymbols,
}) {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 80,
      flexGrow: 0.5,
    },
    button: {
      flexDirection: "row",
      paddingBottom: 10,
    },
  });
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.button}>
          <Text style={{paddingRight: 25}}>Lower (abc)</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={letters ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setLetters(!letters)}
            value={letters}
          />
        </View>

        <View style={styles.button}>
          <Text style={{paddingRight: 19}}>Upper (ABC)</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={capLetters ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setCapLetters(!capLetters)}
            value={capLetters}
          />
        </View>

        <View style={styles.button}>
          <Text style={{paddingRight: 5}}>Numbers (123)</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={numbers ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setNumbers(!numbers)}
            value={numbers}
          />
        </View>

        <View style={styles.button}>
          <Text style={{paddingRight: 10}}>Symbols (!#$)</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={symbols ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setSymbols(!symbols)}
            value={symbols}
          />
        </View>
      </View>
    </View>
  );
}

export default Options;
