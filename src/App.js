// router를 render하는 역할
// router - URL을 보고 있는 component

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>  
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<Detail />} />
    </Routes>
    <GlobalStyles />
  </Router>
  );
}

export default App;
