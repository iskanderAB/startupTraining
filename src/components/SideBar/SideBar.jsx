import React from "react";
import './sideBar.css'
const SideBar = ({show}) => {
    return (<div className='sideBar' style={{transform: show  ? 'translateX(0%)': 'translateX(-100%)'}}>
     <ul>
         <li> # 1 </li>
         <li> # 2</li>
     </ul>
    </div>) ;
}
export default  SideBar ;
