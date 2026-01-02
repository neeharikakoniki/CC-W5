import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { CartContext } from "../context/CartContext";

export default function CheckoutScreen({ navigation }) {
  const { getCartItems } = useContext(CartContext);
  const items = getCartItems();

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22 }}>Order Summary</Text>

      <Text>Subtotal: ${subtotal.toFixed(2)}</Text>
      <Text>Tax (10%): ${tax.toFixed(2)}</Text>
      <Text style={{ marginVertical: 10, fontWeight: "bold" }}>Total: ${total.toFixed(2)}</Text>

      <Button title="Enter Address" onPress={() => navigation.navigate("Address")} />
    </View>
  );
}
