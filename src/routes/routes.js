import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from '../components/landing';
import AdminDashboard from '../components/admin-dashboard';
import EmployeeDashboard from '../components/employee-dashboard';
import EmpAttendance from '../components/emp_attendance';
import Login from '../components/login';
import Forgot from '../components/forgot-pass';
import About from '../components/about';
import Registeremployee from '../components/register_emp';
import Allowednetwork from '../components/allowed_networks';
import ProtectedRoute from './ProtectedRoutes';

const routes=()=>{
    return (
        <Router>
            <Switch>
            <Route exact path='/' component={Landing} />
            {/* <ProtectedRoute exact path='/admin-dashboard' component={AdminDashboard} allowedRoles={["admin"]}/> */}
            <Route exact path='/admin-dashboard' component={AdminDashboard}/>
            <Route exact path='/employee-dashboard' component={EmployeeDashboard} />
            <Route exact path='/emp-attendance' component={EmpAttendance} />
            <Route exact path='/allowed_networks' component={Allowednetwork} />
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register_emp' component={Registeremployee} />  
            <Route exact path='/forgot-pass' component={Forgot}/>
            <Route exact path='/about' component={About} />            
            </Switch>
        </Router>
    )
}
export default routes;
