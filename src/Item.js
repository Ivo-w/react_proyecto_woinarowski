// item
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const datos = {
	producto: "Libro mockup",
	descripcion: "Libro a diseñar",
	pictureUrl:"https://img.freepik.com/psd-gratis/plantilla-maqueta-portada-libro_68185-415.jpg?size=626&ext=jpg" ,
	price: 800 };


function Item () {
	return(
	<>
		<div class="card tamanioCard">
  				<img src={datos.pictureUrl} class="card-img-top cardEstilo" alt="..."></img>
  			<div class="card-body">
		    		<h5 class="card-title">{datos.producto}</h5>
		    		<p class="card-text">{datos.descripcion}</p>
		    		<p class="card-text">${datos.price}</p>
		    		<a href="" class="btn btn-primary">Ver detalle del producto</a>
  			</div>
		</div>
	</>
	);
};

export default Item;










