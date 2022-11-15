import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View>
      <Text style={styles.headerText}>DIME</Text>
      <Text style={styles.Super}>®</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerText: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    fontSize: 24,
    fontWeight: "400",
    letterSpacing: 16,
  },
  Super: {
    position: "absolute",
    right: 0,
  },
});
