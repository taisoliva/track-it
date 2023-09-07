import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabbitsPage from "./pages/HabbitsPage/HabbitsPage";
import HistoricPage from "./pages/HistoricPage/HistoricPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import GlobalStyle from "./styles/GlobalStyles"
import  { AuthProvider } from "./context/AuthContext";
import "./styles/calendar.css"
import { ProgressProvider } from "./context/PercentageContext";
import Header from "./components/Header";

export const pathsWithoutHeaderAndMenu = ['/', '/cadastro'];

function App() {
  return (
    <AuthProvider> 
    <ProgressProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/habitos" element={<HabbitsPage/>} />
          <Route path="/historico" element={<HistoricPage />} />
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
    </AuthProvider>
  );
}

export default App;
