import React from "react";
import { View, Switch } from "react-native";

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
  return (
    <View>
      <View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={letters ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setLetters(!letters)}
          value={letters}
        />

        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={capLetters ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setCapLetters(!capLetters)}
          value={capLetters}
        />

        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={numbers ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setNumbers(!numbers)}
          value={numbers}
        />

        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={symbols ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setSymbols(!symbols)}
          value={symbols}
        />
      </View>
    </View>
  );
}

export default Options;
