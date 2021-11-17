import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from "./ItemDetail"
let ok = true;



function ItemDetailContainer() {
	return (

	let API_obj = (datos) => {
	return datos;
	}


	getItem = () => {
		let Item = (time, task) => {
			return new Promise ((resolve, reject) => {
				if (ok){
					setTimeOut (() => {
						resolve (task)
					}, time);
				} else {
					reject("error")
				}
			});
		}
	}
	delay (2000, API_obj(datos) )
	.then(peticion => {console.log(peticion)}) 
	.catch(error => console.log(error)) 

	<>

	<ItemDetail />

	</>
	)
}