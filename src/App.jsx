import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Game from "./pages/game";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // Simulate loading state
  setTimeout(() => {
    setIsLoading(false);
  }, 1600);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
