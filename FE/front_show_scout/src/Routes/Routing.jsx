import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AdminCentral from '../Pages/AdminCentral';
import PrivateRoute from './PrivateRoute';

function Routing() {

  return (
    <div>
      <Router>
        <Routes>
          
                {/* rutas publicas */}
                <Route path="/" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>

                {/* rutas privadas */}
                <Route path="/AdminCentral" element={<PrivateRoute topSecret={<AdminCentral/>}/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default Routing