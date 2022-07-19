import React, { useEffect, useRef } from "react";

const EjemploRef = () => {

const arr = ["left", "right","top", "bottom"];
    
    const refs = useRef(arr.map(() => React.createRef()));

    useEffect(() => {
        console.log(refs)
    }, []);

    return (
        <div>
        {arr.map((el, i) => (
            <p key={i}>
            <input ref={refs.current[i]} value={el} onChange={() => {}} />
            </p>
        ))}
        </div>
    );

}

export default EjemploRef
