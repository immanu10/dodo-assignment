import { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
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
          <Route
            path="/transaction"
            element={
              <div className="">
                <h1>Transaction</h1>
                <Outlet />
              </div>
            }
          >
            <Route index element={<Navigate replace to="overview" />} />
            <Route path="overview" element={<h1> overview</h1>} />
            <Route path="products" element={<h1> products</h1>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
