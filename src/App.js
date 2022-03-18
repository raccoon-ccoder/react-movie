// router를 render하는 역할
// router - URL을 보고 있는 component

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import List from "./routes/List";
import GlobalStyles from "./components/GlobalStyles";


function App() {
  return (
  <Router basename={process.env.PUBLIC_URL}>
    <GlobalStyles />
    <Routes>  
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<Detail />} />
      <Route path="/genres/:genre" element={<List />}/>
    </Routes>
  </Router>
  );
}

export default App;
