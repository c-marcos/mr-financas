import { lightTheme } from "./themes/lightTheme";
import { darkTheme } from "./themes/darkTheme";
import { ThemeProvider } from '@emotion/react';
import { useTheme } from "./hooks/theme";
import { useEffect } from "react";
import { useAuth } from "./hooks/auth";
import { Alert } from "./components/Alert";


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
        <Alert show={true} setShow={()=>{}} type="error" title="Erro ao enviar os dados"/>
    </ThemeProvider>
  );
}


export default App;
