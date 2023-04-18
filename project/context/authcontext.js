import { createContext, useReducer, useContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import axiosInstance from "../lib/axiosinstance";

const AuthState= {
  User: {},
  orders: [],
  withdraw: [],
  deposits: [],
};



const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "set_user":
      return { ...state, User: payload };

    case "set_orders":
      return { ...state, orders: payload };

    case "set_deposits":
      return { ...state, deposits: payload };

    case "set_withdraw":
      return { ...state, withdraw: payload };

    default:
      return state;
  }
};

const AuthContext = createContext(AuthState);

const AuthProvider = ({ children }) => {
  const { data: session } = useSession();
  const [state, dispatch] = useReducer(reducer, AuthState);
  useEffect(() => {
    if (session?.User?.email && !state?.User?.email) {
      axiosInstance
        .get(`/api/auth/get_user_info`, {
          headers: {
            email: session?.User?.email,
          },
        })

        .then((res) => {
          const { _id, balance, email, image, name } = res.data?.User;
          dispatch({
            type: "set_user",
            payload: {
              _id,
              balance,
              email,
              image:
                image ||
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              name,
            },
          });
        })

        .catch((error) => {
          console.log("errro ", error?.message);
        });
    }
  }, [session]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);



export { AuthProvider, useAuthContext };