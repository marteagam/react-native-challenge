import React from "react";
import { View, StyleSheet } from "react-native";

import ChallengeOne from "./Challenges/ChallengeOne";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <ChallengeOne />
    </View>
  );
};

export default App;
