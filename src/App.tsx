import "./styles/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Dashboard from "./modules/page_1/dashboard/dashboard";
import UserManagement from "./modules/page_2/user_management/UserManagement";
import theme from "./common_ui/theme_mui/Theme";
import ContactManagement from "./modules/page_3/contact_management/ContactManagement";
import PATHS from "./routes//Paths";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path={PATHS.HOME} element={<Dashboard />} />
          <Route path={PATHS.DASHBOARD} element={<Dashboard />} />
          <Route path={PATHS.USER_MANAGEMENT} element={<UserManagement />} />
          <Route
            path={PATHS.CONTACT_MANAGEMENT}
            element={<ContactManagement />}
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
