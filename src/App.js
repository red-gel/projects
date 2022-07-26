import "./App.css";
import { LoginContext } from "./state/loginContext";
import { useState } from "react";
import { Protected } from "./pages/login/protected";
import { Dashboard } from "./pages/dashboard/dashboard";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <LoginContext.Provider value={{isLogged, setIsLogged}}>
      <Protected/>
    </LoginContext.Provider>
  );
}

export default App;
