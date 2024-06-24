import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pagelayout from "./components/Pagelayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pagelayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
