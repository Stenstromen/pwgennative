import React from "react";
import { View, Button } from "react-native";

function Generate({ generatePassword }) {
  return (
    <View>
      <Button
        onPress={generatePassword}
        title="Generate P4$$w0rd"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

export default Generate;
