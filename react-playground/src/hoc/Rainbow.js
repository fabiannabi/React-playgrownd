import React from 'react';

const Rainbow = (WrappedComponent) => {

    const colors =['red', 'green', 'blue', 'pink', 'orange', 'purple', 'brown', "yellow"];
    const randomColor= colors[Math.floor(Math.random()*7)];
    const className = randomColor+'-text';
    return(props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow
