import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import GlobalStyle from "./styles/GlobalStyles"

function App() {
  return (

    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
