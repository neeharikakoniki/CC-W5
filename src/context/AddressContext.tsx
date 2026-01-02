import React, { createContext, useState } from "react";

type Address = {
  fullName: string;
  phone: string;
  street: string;
  city: string;
  postal: string;
};

type AddressContextType = {
  address: Address;
  updateAddress: (field: keyof Address, value: string) => void;
  clearAddress: () => void;
};

export const AddressContext = createContext<AddressContextType | null>(null);

export function AddressProvider({ children }) {
  const [address, setAddress] = useState<Address>({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    postal: "",
  });

  const updateAddress = (field: keyof Address, value: string) => {
    setAddress((prev) => ({ ...prev, [field]: value }));
  };

  const clearAddress = () => {
    setAddress({
      fullName: "",
      phone: "",
      street: "",
      city: "",
      postal: "",
    });
  };

  return (
    <AddressContext.Provider
      value={{
        address,
        updateAddress,
        clearAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}
