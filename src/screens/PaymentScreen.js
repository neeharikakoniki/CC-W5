import React, { useState, useContext } from "react";
import { View, Text, Button } from "react-native";
import { PaymentContext } from "../context/PaymentContext";

export default function PaymentScreen({ navigation }) {
  const { setPaymentMethod } = useContext(PaymentContext);

  return (
    <View style={{ padding: 20 }}>
      <Text>Select Payment Method:</Text>

      <Button title="Credit Card" onPress={() => setPaymentMethod("CARD")} />
      <Button title="Cash on Delivery" onPress={() => setPaymentMethod("COD")} />

      <Button
        title="Pay"
        onPress={() => navigation.navigate("PaymentResult")}
      />
    </View>
  );
}


