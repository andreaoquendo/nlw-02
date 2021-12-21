import React from 'react';

interface InputProps {
    name: string;
    label: string;
}
// 20:32

const Input: React.FC<InputProps> = ({ name, label }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} />
        </div>
    );
}

export default Input;