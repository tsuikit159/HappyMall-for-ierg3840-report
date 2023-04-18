import { createContext, useReducer, useContext, useEffect } from "react";

const TestState = {
  name: "Test Context",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

const TestContext = createContext(TestState);

const TestProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, TestState);

  return (
    <TestContext.Provider value={{ state, dispatch }}>
      {children}
    </TestContext.Provider>
  );
};

const useTestContext = () => useContext(TestContext);

export { TestProvider, useTestContext };