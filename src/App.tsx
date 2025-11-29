import { Route, Routes } from "react-router-dom";

import TradePage from "./pages/TradePage/TradePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<TradePage />} />
      <Route path="/portfolio" element={<NotFoundPage />} />
      <Route path="/funding" element={<NotFoundPage />} />
      <Route path="/profile" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
