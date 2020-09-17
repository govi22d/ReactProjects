import React from 'react';

export function ImageWithFallback(props) {
    let [imgSrc, updateImage] = React.useState(props.source);

    return (
        <img 
        src= {imgSrc} 
        onError={() => updateImage("/logo192.png")} 
        className = "img-thumbnail"
        width="250"
        height="250"/>
    );
}
