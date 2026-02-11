import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

const initialState = {
  user: "John",
  age: 30,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_AGE":
      return { ...state, age: state.age + 1 };
    case "DECREMENT_AGE":
      return { ...state, age: state.age - 1 };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const incrementAge = () => {
    dispatch({ type: "INCREMENT_AGE" });
  };

  const decrementAge = () => {
    dispatch({ type: "DECREMENT_AGE" });
  };

  const value = {
    user: state.user,
    age: state.age,
    incrementAge,
    decrementAge,
  };

  return <UserContext value={value}>{children}</UserContext>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser muss sich in einem UserProvider befinden!");
  }
  return context;
};

export { UserProvider };
export default UserContext;
