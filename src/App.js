import React from "react";
import './App.css';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./ItemListContainer"

function App() {
  return ( 
    <>
    <NavBar />
    <ItemListContainer />
    <ItemCount />
    </>  
  );
}

export default App;
