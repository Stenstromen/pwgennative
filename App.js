import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import getRandomPass from "./Pwgen";
import Output from "./components/Output";
import Length from "./components/Length";
import Options from "./components/Options";
import Generate from "./components/Generate";

export default function App() {
  const [pwLength, setPwLength] = useState(16);
  const [capLetters, setCapLetters] = useState(false);
  const [letters, setLetters] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [pass, setPass] = useState("");

  const genPass = () => {
    if (!capLetters && !letters && !numbers && !symbols) return;
    return setPass(
      getRandomPass(pwLength, letters, capLetters, numbers, symbols)
    );
  };

  useEffect(() => {
    genPass();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Password Generator</Text>
      <Output output={pass} />
      <Length pwLength={pwLength} setPwLength={setPwLength} />
      <Options
        capLetters={capLetters}
        setCapLetters={setCapLetters}
        letters={letters}
        setLetters={setLetters}
        numbers={numbers}
        setNumbers={setNumbers}
        symbols={symbols}
        setSymbols={setSymbols}
      />
      <Generate generatePassword={genPass} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
