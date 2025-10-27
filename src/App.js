import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Header from "./components/header";
import Error from "./components/error";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/survey/:questionnaire"
          element={<Survey />}
        />
        <Route
          path="/results"
          element={<Results />}
        />
        <Route
          path="/freelances"
          element={<Freelances />}
        />
        <Route path="*" element={<Error />} />
        {/* Ajoutez d'autres routes ici */}
      </Routes>
    </div>
  );
}

export default App;
