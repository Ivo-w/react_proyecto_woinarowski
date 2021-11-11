import React from "react";

function ItemCount () {
	return (
		<>	
		<div class="selector">
		  <button (click)="decrementar()">-</button>  
		  <div class="valor"> </div>
		  <button (click)="incrementar()">+</button>
		</div>
		<Incremento />
		<Decremento />
		</>
		)
}

function Incremento (){
	if ("click")

}

function Decremento (){

}


export default ItemCount;