import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/app-layout";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/overview" />} />
          <Route path="/overview" element={<h1>Hello</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
