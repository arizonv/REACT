import { Routes, Route } from 'react-router-dom';
import Layout  from "./pages/layout";
import Dashboard  from "./pages/Dashboard";

function App() {
  return (
    <div>
      <h1>Routes</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="dashboard" element={<Dashboard />} />
           <Route path="*" element={<App />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
