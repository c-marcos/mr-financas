import { useEffect } from "react";
import "./App.css";
import { useAuth } from "./hooks/auth";
import { useTheme } from "./hooks/theme";

function App() {
  const { handleAuthenticateUser } = useAuth();
  const { handleInitTheme } = useTheme();

  useEffect(() => {
    handleAuthenticateUser();
    handleInitTheme();
  }, [handleAuthenticateUser, handleInitTheme]);

  return (
    <>
      <h1>Ola mundo</h1>
    </>
  );
}

export default App;
