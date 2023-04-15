import React from "react";
import { Routes, Route, Outlet,Link } from 'react-router-dom';
import Report from "../components/dashboard/Report";
import Test from "../components/dashboard/Test"
function Dashboard() {
  return (
    <div>
            <ul>
                <li><Link to={"frontend"}>1- Frontenddd</Link></li>
                <li><Link to={"backend"}>2- Backend</Link></li>
                <li><Link to={"test"}>2- Backend</Link></li>
            </ul>
            <Outlet/>
            <Routes >
                <Route path="frontend" element={<p>FrontEnd ✨</p>}/>
                <Route path="backend" exact element={ <Report/> } />
                <Route path="test" exact element={ <Test/> } />
            </Routes>
        </div>
  );
}

export default Dashboard;

