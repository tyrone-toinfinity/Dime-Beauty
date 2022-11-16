import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Shop = (props) => {
  const products = props.route.params.post;
  let [data, setData] = useState([]);

  useEffect(() => setData(products), []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          {data && data.map((el) => <Card key={el.id} props={el}></Card>)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    color: "white",
    padding: 0,
  },
  image: { resizeMode: "cover", height: 250 },
  header: { fontSize: 24, fontWeight: "600" },
  bodyText: { width: "50%", fontSize: 12, marginVertical: 10 },
  textWrapper: {
    marginLeft: 16,
    marginTop: 60,
  },
  button: {
    alignItems: "center",
    justifyContent: "start",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    backgroundColor: "#222",
    width: "30%",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  bestSellers: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 23,
    marginHorizontal: 16,
  },
  cardContainer: {
    flex: 1,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignContent: "center",
  },
});
