import React from "react";

const Conditional = () =>{
    const x = false;

    const name = "João";
    return (
        <div>
            {x ? <h1>True</h1> : <h1>False</h1>}

            {/* usando else */}
            {name === "Pablo" ? (
                <h2>El nombre es {name}</h2>
            ) : (
                <h2>El nombre no es Pablo</h2>
            )}
        </div>
    );
};

export default Conditional;