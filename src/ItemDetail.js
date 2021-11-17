import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {datos} from "./Item.js"

function ItemDetail () {
	return (
		<>

<div class="card mb-3" style="max-width: 540px;">
  	<div class="row no-gutters">
    	<div class="col-md-4">
      		<img src={datos.pictureUrl} alt="">
   		</div>
    	<div class="col-md-8">
	      <div class="card-body">
	        <h5 class="card-title"> {datos.producto} </h5>
	        <h5 class="card-title"> ${datos.price} </h5>
	        <p class="card-text"> {datos.descripcion} </p>
	        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
	      	</div>
	      </div>
	 </div>
</div>

		</>
	)
}