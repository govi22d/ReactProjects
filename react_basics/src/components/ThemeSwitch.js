import React from 'react';

export function ThemeSwitch(props) {
    let [theme, setTheme] = React.useState("light");
    
    //hook
    React.useEffect(() => {
        console.log("Effect hook called");
        document.body.className ="bg-" +theme;
    });

    function changeTheme(value) {
        setTheme(value);
        props.changeTheme(value);
    };
    
    if(theme === "dark") {
        return <button onClick={() => changeTheme("light")} >Light</button>
    }

    return <button onClick={() => changeTheme("dark")}>Dark</button>
} 