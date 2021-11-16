import React from "react";
import './App.css';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./ItemListContainer"
import ItemCount from "./ItemCount.js"
import ItemList from "./ItemList.js"

function App() {
  return ( 
    <>
    <NavBar />
    <ItemListContainer /> 
    <ItemCount
    stock="5" />
    </>  
  );
}

export default App;
