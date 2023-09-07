import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabbitsPage from "./pages/HabbitsPage/HabbitsPage";
import HistoricPage from "./pages/HistoricPage/HistoricPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import GlobalStyle from "./styles/GlobalStyles"
import UserData from "./context/UserData";
import "./styles/calendar.css"

function App() {

  const [token, setToken] = useState("")
  const [imageUser, setImageUser] = useState("")
  const [porcentagem, setPorcentagem] = useState(0)

  return (

    <UserData.Provider value={{token,setToken,imageUser,setImageUser, porcentagem, setPorcentagem}}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/habitos" element={<HabbitsPage/>} />
          <Route path="/historico" element={<HistoricPage />} />
        </Routes>
      </BrowserRouter>
    </UserData.Provider>

  );
}

export default App;
