import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import AppLayout from "./components/layout/app-layout";
import NotFound from "./pages/not-found";
import { OverViewPage } from "./pages/overview";
import { DarkModeProvider } from "./context/ThemeContext";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/overview" />} />
            <Route path="/overview" element={<OverViewPage />} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
