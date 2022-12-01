import React, { FC, useState, useEffect } from "react";

interface GreetingProps {
    name? : string
}

const Greeting: FC<GreetingProps> = ({ name } : GreetingProps) => {
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        if (name) {
            setMessage(`Hello from, ${name}`);
        }
    }, [name]);

    if (!name) {
        return (
            <div>no name given</div>
        );
    }

    return (
        <div>{message}</div>
    );
};

export default Greeting;

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "enteredName":
            if (state.enteredName === action.payload) {
                return state;
            }

            return { ...state, enteredName: action.payload };
        case "message":
            return { ...state, message: `Hello, ${action.payload}` };
        default:
            throw new Error("Invalid action type " + action.type);
    }
}

const initialState = {
    enteredName: "",
    message: ""
};