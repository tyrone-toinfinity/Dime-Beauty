import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import CartItems from "./CartItems";
import Card from "./Card";
import { Button } from "react-native-paper";
import CartCards from "./CartCards";

const Cart = (props) => {
  let { cartItems, onAdd, onRemove } = props;

  let itemsPrice = 0;

  cartItems.map((el) => (itemsPrice += parseInt(el.variants[0].price.amount)));

  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Bag ({cartItems.length})</Text>

      {cartItems.length === 0 && (
        <Text style={styles.empty}>Cart is empty</Text>
      )}
      {cartItems.map((item) => (
        <View key={item.id}>
          <CartCards product={item} onAdd={onAdd} onRemove={onRemove} />
        </View>
      ))}

      <View>
        <Text style={styles.total}>Amount: ${itemsPrice}</Text>
        <Text style={styles.total}>Tax: ${taxPrice}</Text>
        <Text style={styles.total}>Ship: ${shippingPrice}</Text>
        <Text style={styles.totalAmount}>Total: ${totalPrice}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 24, alignSelf: "center" },
  total: { fontSize: 24, alignSelf: "flex-end", margin: 20 },
  totalAmount: {
    fontSize: 24,
    alignSelf: "flex-end",
    margin: 20,
    paddingVertical: 20,
  },
  empty: { fontSize: 24, alignSelf: "flex-end", margin: 20 },
});
