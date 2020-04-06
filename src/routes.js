import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { AuthProvider } from "./config/Auth";
import PrivateRoute from "./config/PrivateRoute";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';
import Dashboard from './pages/Dashboard';

export default function Routes(){     
    return(
        <AuthProvider>
            <Router>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/forgot" component={Forgot} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Router>
        </AuthProvider>
    )
}