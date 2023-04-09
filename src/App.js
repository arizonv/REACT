import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";


import Dashboard  from "./pages/Dashboard";
import Analytic  from "./pages/Analytic";

function App() {
  return (
    <div>
      <h1>Routes</h1>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="analytic" element={<Analytic/>} />
            <Route path="*" element={<App />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Navigation() {
  return (
    <div>
      <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/analytic">Analytic</Link>
            </li>
          </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
