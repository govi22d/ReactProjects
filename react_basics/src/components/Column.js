import React from "react"; 

function Column(props) { 
    const colSize = 12 / props.size; 
    const cls = "col-md-" + colSize; 
return <div className={cls}>{props.children}</div>; 
} 

export default Column;