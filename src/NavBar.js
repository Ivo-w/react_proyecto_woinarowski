import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

function NavBar () {
	return (
	<>
	<nav class="navbar navbar-expand-lg navbar-light bg-primary">
		  	<a class="navbar-brand" href="#">LOGO</a>
		  	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  	</button>
	  	<div class="collapse navbar-collapse" id="navbarNav">
		    <ul class="navbar-nav">
		      <li class="nav-item active">
		        <a class="nav-link" href="#">Inicio <span class="sr-only"></span></a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#">Productos</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#">Descuentos</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link ">Contactos</a>
		      </li>
		    </ul>
		    <CartWidget />
	  	</div>
	</nav>
	</>
	);
};

export default NavBar;