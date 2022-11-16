import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import CartCards from "./CartCards";
import { Button, TextInput } from "react-native-paper";

const Cart = (props) => {
  let { cartItems, onAdd, onRemove } = props;
  let itemsPrice = 0;
  const [code, setCode] = useState("");
  const promoCode = code === "DIME" ? 0.9 : 1;

  cartItems.map(
    (el) => (itemsPrice += el.qty * parseInt(el.variants[0].price.amount))
  );
  itemsPrice = itemsPrice * promoCode;
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 100 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  // console.log(code === "DIME");

  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={() => 2}>Add to Bundle</Button>
      <Text style={styles.title}>Your Bag ({cartItems.length})</Text>

      {cartItems.length === 0 && (
        <Text style={styles.empty}>Cart is empty</Text>
      )}
      {cartItems.map((item) => (
        <View key={item.id}>
          <CartCards product={item} onAdd={onAdd} onRemove={onRemove} />
        </View>
      ))}
      {/* Price */}
      <View>
        <Text style={styles.total}>
          Amount: ${cartItems.length === 0 ? 0.0 : itemsPrice.toFixed(2)}
        </Text>
        <Text style={styles.total}>
          Tax: ${cartItems.length === 0 ? 0.0 : taxPrice.toFixed(2)}
        </Text>
        <Text style={styles.total}>
          Ship: ${cartItems.length === 0 ? 0.0 : shippingPrice.toFixed(2)}
        </Text>
        <Text style={styles.totalAmount}>
          Total: ${cartItems.length === 0 ? 0.0 : totalPrice.toFixed(2)}
        </Text>
        <TextInput
          style={styles.code}
          placeholder="code"
          keyboardType="default"
          maxLength={15}
          onChangeText={(text) => setCode(text)}
        />
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
  code: { fontSize: 24, padding: 6 },
});
