import ReactDOM from "react-dom/client";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import BlankPage from "./pages/base/BlankPage";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<BlankPage />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes>
  </HashRouter>
);