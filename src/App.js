import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import { AuthContext } from "./Context";
import "./App.css";
import { useEffect, useState } from "react";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setAuth(true);
    }
  }, []);
  return (
    <Provider store={store}>
      <AuthContext.Provider
        value={{
          auth,
          setAuth,
        }}
      >
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </Provider>
  );
}

export default App;
