import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import SideBar from "./components/SideBar/SideBar";
import NaveBar from "./components/NaveBar/NaveBar";
function App() {
    const [count , setCount ] = useState(0);
    const [navShow , setNavShow] = useState(true);
    useEffect(() => {
        console.log(navShow);
    },[navShow]);
    return (
        <div className="App">
            <NaveBar setNavShow={setNavShow} navShow={navShow} />
           <SideBar show={navShow}/>
        </div>
    );
}

export default App;
