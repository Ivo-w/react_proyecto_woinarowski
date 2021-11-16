// item list
import React, {datos} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from "./Item"

let is_ok = true;

let cargarObjeto = (datos) => {
	return datos;
}

let delay = (time, task) => {
	return new Promise ((resolve, reject) => {
		if (is_ok){
			setTimeOut (() => {
				resolve (task)
			}, time);
		} else {
			reject("error")
		}
	});
}

delay (2000, cargarObjeto(datos) )
	.then(peticion => {console.log(peticion)}) // resolve
	.catch(error => console.log(error)) // reject



function ItemList () {
	return(
		<>
		<Item />

		</>
		)
}

export default ItemList;