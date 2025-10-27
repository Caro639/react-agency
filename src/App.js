import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Header from "./components/header";
import Error from "./components/error";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";
import {
  SurveyProvider,
  ThemeProvider,
} from "./utils/context";
import Footer from "./components/footer";
import GlobalStyle from "./utils/style/GlobalStyle";

// const GlobalStyle = createGlobalStyle`
//     * {
//       font-family: 'Trebuchet MS', Helvetica, sans-serif;
//     }
// `;

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/survey/:questionNumber"
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
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
