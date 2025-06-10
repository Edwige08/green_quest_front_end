'use client';

import { useState } from "react";

export default function InputWaste ({ wasteTitle, onChange, wasteId, wastePoints }) {

    const [number, setNumber] = useState(0);

    const updateNumber = (sign) => {
        let newNumber;
        if (sign === "minus" && number > 0) {
            newNumber = number - 1;
        } else if (sign === "plus") {
            newNumber = number + 1;
        } else {
            return;
        }
        setNumber(newNumber);
        onChange(newNumber, wasteId, wastePoints);
    }

    const handleInputChange = (e) => {
        const value = Math.max(0, parseInt(e.target.value) || 0);
        setNumber(value);
        onChange(value, wasteId, wastePoints);
    }
    
    return (
        <div className="input-waste flex items-center mb-3">
            <div className="h-[34px] flex items-center grow-1 border border-gray-300 rounded px-2">
                <p className="text-[16px]">{wasteTitle}</p>
            </div>
            <div className="text-black flex items-center">
                <span className="w-6 h-10 text-[24px] inline-block align-middle text-center cursor-pointer" onClick={() => {updateNumber("minus")}}>-</span>
                <input className="h-[34px] w-[60px] text-center text-[16px] border border-gray-300 rounded inline-block align-middle mx-2 no-apparence" type="number" value={number} onChange={handleInputChange}/>
                <span className="w-6 h-10 text-[24px] inline-block align-middle text-center cursor-pointer" onClick={() => {updateNumber("plus")}}>+</span>
            </div>
        </div>
    )
}