import './App.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/itemListContainer';
import ItemDetailContainer from '../itemDetailContainer/itemDetailContainer';


const App = () => {
    return (
        <>{/* 
            <Navbar/>
            <ItemListContainer/> */}
            <ItemDetailContainer/>
        </>
    );
}

export default App;
