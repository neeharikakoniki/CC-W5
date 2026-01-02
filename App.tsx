import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator"
import {OrderProvider} from "./src/context/OrderContext"
import {PaymentProvider} from "./src/context/PaymentContext"
import {AddressProvider} from "./src/context/AddressContext"
import {CartProvider} from "./src/context/CartContext"

export default function App() {
  return (
    <OrderProvider>
      <CartProvider>
        <AddressProvider>
          <PaymentProvider>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </PaymentProvider>
        </AddressProvider>
      </CartProvider>
    </OrderProvider>
  );
}