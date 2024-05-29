import React from "react";
import {Link} from 'react-router-dom';


function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg bg dark shadow">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand" >Meals Planner</Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">

              <Link to="/" class="nav-link active" >Home</Link>
             </li>

             <li class="nav-item">
              <Link to="/about" class="nav-link active" >About</Link>
             </li>

              <li class="nav-item">
                <Link to="/contact" class="nav-link" >Contact</Link>
              </li> 
              
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default Navbar;