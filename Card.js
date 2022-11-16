import * as React from "react";
import { StyleSheet, Modal, View } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { useState } from "react";

const MyComponent = (props) => {
  const { products, onAdd } = props;

  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: products.images[0].src }} />
      <Card.Content>
        <Title style={styles.title}>{products.title}</Title>
        <Paragraph style={styles.desc} numberOfLines={3}>
          {products.description}
        </Paragraph>
        <Paragraph style={styles.price}>
          ${Math.floor(products.variants[0].price.amount)}
        </Paragraph>
      </Card.Content>
      <Card.Actions style={styles.container}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => onAdd(products)}
        >
          Add to Cart
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  card: {
    width: "45%",
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#333",
    shadowOpacity: 0.18,
    shadowRadius: 5,
  },
  title: { marginVertical: 10 },
  container: { justifyContent: "center" },
  button: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 4,
    backgroundColor: "#333",
    marginVertical: 16,
  },
  desc: {
    fontSize: 11,
  },
  price: { alignSelf: "start", marginVertical: 3 },
  modal: { backgroundColor: "red" },
});
