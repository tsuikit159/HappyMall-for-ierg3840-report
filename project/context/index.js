import React from "react";
import { AuthProvider } from "../context/authcontext";
import { TestProvider } from "../context/testcontext";
const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <TestProvider>
        {children}
      </TestProvider>
    </AuthProvider>
  );
};

export default ContextProvider;