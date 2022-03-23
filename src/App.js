import { Route, Routes } from "react-router-dom";
import { Erica } from "./components/Erica";
import { Hakan } from "./components/Hakan";
import { Matts } from "./components/Matts";
import "./style.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/erica" element={<Erica />} />
        <Route path="/matts" element={<Matts />} />
        <Route path="/hakan" element={<Hakan />} />
      </Routes>
    </div>
  );
}

export default App;
