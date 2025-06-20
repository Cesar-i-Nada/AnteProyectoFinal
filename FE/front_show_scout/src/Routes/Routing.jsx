import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AdminCentral from '../Pages/AdminCentral';
import AccessLikeR from '../Pages/AccessLikeR';
import AccessLikeL from '../Pages/AccessLikeL';
import ProfileUForm from '../Pages/ProfileUForm';
import ProfileCForm from '../Pages/ProfileCForm';
import ProfileOForm from '../Pages/ProfileOForm';
import Boceto2page from '../Pages/boceto2page';

import PrivateRoute from './PrivateRoute';

function Routing() {

  return (
    <div>
      <Router>
        <Routes>
          
                {/* rutas publicas */}
                <Route path="/" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/AdminCentral" element={<AdminCentral/>}/>

                <Route path="/Boceto2page" element={<Boceto2page/>}/>

                <Route path="/ProfileUForm" element={<ProfileUForm/>}/>

                {/* rutas privadas */}
                <Route path="/AdminCentral" element={<PrivateRoute topSecret={<AdminCentral/>}/>}/>
                <Route path="/AccessLikeR" element={<PrivateRoute topSecret={<AccessLikeR/>}/>}/>
                <Route path="/AccessLikeL" element={<PrivateRoute topSecret={<AccessLikeL/>}/>}/>
                <Route path="/ProfileCForm" element={<PrivateRoute topSecret={<ProfileCForm/>}/>}/>
                <Route path="/ProfileOForm" element={<PrivateRoute topSecret={<ProfileOForm/>}/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default Routing