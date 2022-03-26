import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.maps}>
        <Text>OKKK</Text>
      </View>
      <View style={styles.nav}>
        <Text>DONEE</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maps: {
    height: 80,
  },
  nav: {
    height: 20,
  },
});

export default Home;
