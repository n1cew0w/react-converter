import React, {useEffect} from 'react';
import './App.css';
import {useGetAllDataQuery} from "./redux/api";
import exp from "constants";
import Currencies from "./components/Currencies";


function App() {
    return (
        <div className="App">
            <Currencies/>
        </div>
    );
}

export default App;
