import React from "react";
import { Routes, Route, Outlet,Link } from 'react-router-dom';
import Report from "../components/dashboard/Report";
import Test from "../components/dashboard/Test"
import Index from "../components/dashboard/Index"


function Dashboard() {
  return (
    <div>
            <ul>
                <li><Link to={"Report"}>2- Report</Link></li>
                <li><Link to={"test"}>3- Test</Link></li>
            </ul>
            <Outlet/>
            <Routes>
                <Route index exact element={ <Index/> } />
                <Route path="/*" exact element={ <Index/> } />
                <Route path="Report" exact element={ <Report/> } />
                <Route path="test" exact element={ <Test/> } />
            </Routes>
        </div>
  );
}

export default Dashboard;

