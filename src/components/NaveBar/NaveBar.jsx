import React from "react";
import './NaveBar.css';

const NaveBar = (props) => {
    return(
        <div className='naveBar'>
        <button onClick={()=> props.setNavShow(!props.navShow) }> show! </button>
        </div>
    )
}
export default NaveBar ;
