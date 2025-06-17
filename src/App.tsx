import { lightTheme } from "./themes/lightTheme";
import { darkTheme } from "./themes/darkTheme";
import { ThemeProvider } from '@emotion/react';
import { useTheme } from "./hooks/theme";
import { useEffect } from "react";
import { useAuth } from "./hooks/auth";


function App() {
  const { handleAuthenticateUser } = useAuth();
  const { handleInitTheme, theme } = useTheme();

  useEffect(() => {
    handleAuthenticateUser();
    handleInitTheme();

  }, [handleInitTheme,handleAuthenticateUser]);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <h1>Ola mundo</h1>
    </ThemeProvider>
  );
}


export default App;
