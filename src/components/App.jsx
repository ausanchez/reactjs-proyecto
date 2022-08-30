import './App.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/itemListContainer';
import ItemCount from './ItemCount/ItemCount';


const App = () => {
    return (
        <>
            <Navbar/>
            <ItemListContainer/>
        </>
    );
}

export default App;
