import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pagelayout from "./components/Pagelayout";
import CreateRoutinePage from "./pages/CreateRoutine";
import StartWorkout from "./pages/StartWorkout";
import StartRoutine from "./components/start-workout/StartRoutine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pagelayout />}>
          <Route index element={<HomePage />} />
          <Route path="start-workout" element={<StartWorkout />} />
          <Route path="start-workout/:routine" element={<StartRoutine />} />
          <Route path="create-routine" element={<CreateRoutinePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
