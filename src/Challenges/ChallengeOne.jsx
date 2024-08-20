import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 16,
    marginTop: 30,
  },
  count: { marginVertical: 10 },
  title: { fontSize: 18 },
});

const ChallengeOne = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ChallengeOne</Text>
      <Text style={styles.count}>Count: {counter}</Text>
      <Button title="Increment" onPress={incrementCounter} />
    </View>
  );
};

export default ChallengeOne;
