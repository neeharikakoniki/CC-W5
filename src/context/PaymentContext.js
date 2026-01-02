import React, { createContext, useState } from "react";

export const PaymentContext = createContext();

export function PaymentProvider({ children }) {
  const [paymentMethod, setPaymentMethod] = useState("CARD");

  function clearPayment() {
    setPaymentMethod("CARD");
  }

  return (
    <PaymentContext.Provider value={{ paymentMethod, setPaymentMethod, clearPayment }}>
      {children}
    </PaymentContext.Provider>
  );
}
