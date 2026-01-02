import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { CartContext } from "../context/CartContext";

export default function CartScreen({ navigation }) {
  const { getCartItems } = useContext(CartContext);
  const items = getCartItems();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={styles.header}>Cart</Text>

      {items.map((item) => (
        <View style={styles.row} key={item.product.id}>
          <Text>{item.product.title}</Text>
          <Text>Qty: {item.quantity}</Text>
          <Text>${item.product.price * item.quantity}</Text>
        </View>
      ))}

      <Button title="Proceed to Checkout" onPress={() => navigation.navigate("Checkout")} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 22, marginBottom: 16 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
});
