import React from "react";
import './Person.css'

const Person = (props) => <div onClick={() => props.handler(props.lastname)} className="person" style={{backgroundColor : props.status ?  'antiquewhite' : 'red'}}>
    <span> {props.firstname} </span>
    <span> {props.lastname}  </span>
</div>

export default Person;
