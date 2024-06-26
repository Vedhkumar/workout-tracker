import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pagelayout from "./components/Pagelayout";
import Routine from "./pages/Routine";
import CreateRoutine from "./pages/CreateRoutine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Pagelayout />}>
          <Route index element= {<HomePage />} />
          <Route path="routine" element= {<Routine />} />
          <Route path="create-routine" element= {<CreateRoutine />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
