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
import { Transaction } from "./pages/transaction";
import TransactionLayout from "./components/layout/transaction";
import UserSettingsForm from "./components/settings-form";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/overview" />} />
            <Route path="/overview" element={<OverViewPage />} />
            <Route path="/transaction" element={<TransactionLayout />}>
              <Route index element={<Navigate replace to="overview" />} />
              <Route path="overview" element={<Transaction />} />
              <Route path="products" element={<h1>Products</h1>} />
            </Route>
            <Route path="/developer" element={<Outlet />}>
              <Route index element={<Navigate replace to="overview" />} />
              <Route path="settings" element={<UserSettingsForm />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
