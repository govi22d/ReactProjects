import React from "react"; 
import { ThemeContext } from "../context";

function Column(props) { 
    const theme = React.useContext(ThemeContext);
    const colSize = 12 / props.size; 

    const txtColor = theme === "light" ? "text-dark" : "text-light";
    const cls = txtColor + " col-md-" + colSize; 
    return <div className={cls}>{props.children}</div>; 
} 

export default Column;