import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import IndexServer from "./IndexServer";
import Card from "./Card";
import Cart from "./Cart";
import { Button } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  const model = require("./assets/model.jpg");
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Data pulled from API
  let pullData = (products) => setData(products);

  // Add products
  const onAddHandler = (product) => {
    const exist = cartItems.find((el) => el.id === product.id);
    if (!exist) {
      setCartItems((prevProduct) => {
        return [product, ...prevProduct];
      });
    } else {
      console.log("only one item for now");
    }
  };

  // Remove products
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground style={styles.image} source={model}>
          <View style={styles.textWrapper}>
            <Text style={styles.header}>The new Serum</Text>
            <Text style={styles.bodyText} numberOfLines={3}>
              You get access to this limited edition accessory. Thank you for
              being a VIP!
            </Text>
            <Pressable
              title="SHOP NOW"
              style={styles.button}
              onPress={() =>
                navigation.navigate({
                  name: "",
                  params: { post: data },
                  merge: true,
                })
              }
            >
              <Text style={styles.text}>SHOP NOW</Text>
            </Pressable>
          </View>
          <StatusBar style="auto" />
        </ImageBackground>

        <Text style={styles.bestSellers}>Best Sellers</Text>
        <IndexServer childToParent={pullData}></IndexServer>
        <View style={styles.cardContainer}>
          {data &&
            data.map((el) => (
              <Card key={el.id} onAdd={onAddHandler} products={el}></Card>
            ))}
        </View>

        <Cart onAdd={onAddHandler} onRemove={onRemove} cartItems={cartItems} />
        <Button
          style={styles.clearBtn}
          mode="contained"
          onPress={() => setCartItems([])}
        >
          clear
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    color: "white",
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
  clearBtn: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    backgroundColor: "#222",
    width: "100%",
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
