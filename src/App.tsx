import { lightTheme } from "./themes/lightTheme";
import { darkTheme } from "./themes/darkTheme";
import { ThemeProvider } from '@emotion/react';
import { useTheme } from "./hooks/theme";
import { useEffect } from "react";
import { useAuth } from "./hooks/auth";
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";
import { useAlert } from "./hooks/alert";


function App() {
  const { handleAuthenticateUser } = useAuth();
  const { handleInitTheme, theme } = useTheme();
  const {show, handleToggleAlert} = useAlert()

  useEffect(() => {
    handleAuthenticateUser();
    handleInitTheme();

  }, [handleInitTheme,handleAuthenticateUser]);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <h1>Ola mundo</h1>
        <Alert show={show} setShow={handleToggleAlert} type="error" title="Erro ao enviar os dados"/>
        <Button onClick={handleToggleAlert} name="Salvar" />
    </ThemeProvider>
  );
}


export default App;
