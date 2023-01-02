import React from "react";
import { View, Button } from "react-native";

function Copy({ copyPass }) {
  return (
    <View>
      <Button
        onPress={copyPass}
        title="Copy P4$$w0rd"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

export default Copy;
