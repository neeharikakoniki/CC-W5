import React, { useContext, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { CartContext } from "../context/CartContext";
import { AddressContext } from "../context/AddressContext";
import { PaymentContext } from "../context/PaymentContext";
import { OrderContext } from "../context/OrderContext";

export default function PaymentResultScreen({ navigation }) {
  const { getCartItems, clearCart } = useContext(CartContext);
  const { address, clearAddress } = useContext(AddressContext);
  const { paymentMethod, clearPayment } = useContext(PaymentContext);
  const { saveOrder, createOrder } = useContext(OrderContext);

  useEffect(() => {
    const items = getCartItems();
    const order = createOrder(items, address, paymentMethod);

    saveOrder(order);
    clearCart();
    clearAddress();
    clearPayment();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Payment Successful!</Text>

      <Button title="Back to Products" onPress={() => navigation.navigate("Products")} />
    </View>
  );
}
