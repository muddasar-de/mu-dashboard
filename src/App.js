import "./index.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
// Scenes
import Topbar from "./scenes/global/Topbar";
import SideNav from "./scenes/global/SideNav";
import Dashboard from "./scenes/dashboard/Dashboard";
import Calendar from "./scenes/calendar/Calender";
import Bar from "./scenes/bar/Bar";
import Pie from "./scenes/pie/Pie";
import Line from "./scenes/line/Line";
import Geography from "./scenes/geography/Geography";
import { ProSidebarProvider } from "react-pro-sidebar";
import Team from "./scenes/team/Team";
import Users from "./scenes/users/Users";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <div className="app">
            <SideNav />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/users" element={<Users />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/invoices" element={<Calendar />} />
                <Route path="/form" element={<Dashboard />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/calender " element={<Dashboard />} />
              </Routes>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
