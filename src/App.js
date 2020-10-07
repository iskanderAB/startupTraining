import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
function App() {
    const [count , setCount ] = useState(0);
    return (
        <div className="App">
            <button onClick={()=>setCount(count +1)}> click me !</button>
            <Counter count={count}/>
        </div>
    );
}

export default App;
