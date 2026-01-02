import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductsScreen from "../screens/ProductScreen"
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import AddressScreen from "../screens/AddressScreen";
import PaymentScreen from "../screens/PaymentScreen";
import PaymentResultScreen from "../screens/PaymentResultScreen";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="Address" component={AddressScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="PaymentResult" component={PaymentResultScreen} />
      <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
    </Stack.Navigator>
  );
}
