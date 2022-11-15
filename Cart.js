import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import CartItems from "./CartItems";
import Card from "./Card";
import { Button } from "react-native-paper";
import CartCards from "./CartCards";

const Cart = (props) => {
  let { cartItems, onAdd, onRemove } = props;
  // cartItems = [];

  // console.log(cartItems);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Bag (0)</Text>

      {cartItems.length === 0 && <Text>Cart is empty</Text>}
      {cartItems.map((item) => (
        <CartCards product={item} onAdd={onAdd} onRemove={onRemove} />
        // <View key={item.id}>
        //   <Text>{item.title}</Text>

        //   <Button onPress={() => onAdd(item)}>add</Button>
        //   <Button onPress={() => onRemove(item)}></Button>
        // </View>
      ))}
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 24, alignSelf: "center" },
});
