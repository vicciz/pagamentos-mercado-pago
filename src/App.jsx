import { BrowserRouter, Routes, Route } from "react-router-dom";

import Vitrine from "./navegar/Vitrine";
import FormCompra from "./navegar/FormCompra";
import FormPagamento from "./navegar/FormPagamento";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Vitrine />} />
        <Route path="/FormCompra" element={<FormCompra />} />
        <Route path="/FormPagamento" element={<FormPagamento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;