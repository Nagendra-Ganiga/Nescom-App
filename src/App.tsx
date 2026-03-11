import "./styles/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Dashboard from "./modules/page_1/dashboard/dashboard";
import theme from "./common_ui/theme_mui/Theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
