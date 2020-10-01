import React, {useState} from 'react';
import './App.css';
import Person from "./components/Person/person";

function App() {
    const [persons , setPersons] = useState([
        {
            lastname: 'iskander',
            firstname: 'abbassi',
            status : true
        },
        {
            lastname: 'taher',
            firstname: 'said',
            status : false
        },
        {
            lastname: 'khaled',
            firstname: 'abbes',
            status : true
        }, {
            lastname: 'mouin',
            firstname: 'lahbib',
            status : false
        }
    ]);
   const statusHandler =(lastname) => {
       const newPersons = persons.map(v => {
           if (v.lastname === lastname){
               v.status = !v.status
               return v
           }
           return  v ;
       });
       setPersons(newPersons);
       console.log(newPersons);
   }
    return (
        <div className="App">
            {persons.map((v,index) => <Person handler={statusHandler} key={index} status={v.status} lastname={v.lastname} firstname={v.firstname} />)}
        </div>
    );
}

export default App;
