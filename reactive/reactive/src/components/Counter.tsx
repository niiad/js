import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);

    const handleCounter = (operation: string): void => {
        if (operation === "add") {
            return setCounter(counter + 1);
        }

        return setCounter(counter - 1);
    };

    return (
        <p>
            counter: {counter} <br />
            <button onClick={() => handleCounter("add")}> + add</button>
            <button onClick={() => handleCounter("subtract")}> - subtract</button>
        </p>
    );
};