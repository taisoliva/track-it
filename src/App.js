import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabbitsPage from "./pages/HabbitsPage/HabbitsPage";
import HistoricPage from "./pages/HistoricPage/HistoricPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import GlobalStyle from "./styles/GlobalStyles"

function App() {

  const [token, setToken] = useState("")

  return (

    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage setToken={setToken} />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/hoje" element={<TodayPage token={token}/>} />
        <Route path="/habitos" element={<HabbitsPage token={token}/>} />
        <Route path="/historico" element={<HistoricPage token={token}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
