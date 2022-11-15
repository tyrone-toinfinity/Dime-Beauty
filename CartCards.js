import * as React from "react";
import {
  Avatar,
  Card,
  IconButton,
  Button,
  Title,
  Paragraph,
} from "react-native-paper";

const CartCards = (props) => {
  let { product, onAdd, onRemove } = props;

  const imageProduct = product.images[0].src;
  return (
    <Card>
      <Title> {product.title}</Title>
      <Paragraph>{product.variants[0].price.amount}</Paragraph>
      <Avatar.Image size={90} source={{ uri: imageProduct }} />
      <Card.Actions>
        <Button onPress={() => onAdd(product)}>add more</Button>
        <Button onPress={() => onRemove(product)}>delete</Button>
      </Card.Actions>
    </Card>
  );
};
export default CartCards;
