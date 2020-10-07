import React from "react";
import './Counter.css';
const counter = ({count}) => <div style={{ backgroundColor : count % 2 ===0  ?  'white' : 'red' , margin : 'auto ' ,  width : '10vh'  , height : '10vh' , textAlign :'center'}}> <span> {count}  </span> </div>
export default counter ;
