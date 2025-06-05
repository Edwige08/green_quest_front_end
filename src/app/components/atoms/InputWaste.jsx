'use client';

import { useState } from "react";

export default function InputWaste ({ wasteTitle }) {

    let [number, setNumber] = useState(0);

    const updateNumber = (sign) => {
        if (sign === "minus" && number > 0) {
            setNumber(number -= 1);
        } else if (sign === "plus") {
            setNumber(number += 1);
        } else {
            return;
        }
    }

    return (
        <div className="input-waste grid grid-cols-2">
            <div className="">
                <p>{wasteTitle}</p>
            </div>
            <div className="">
                <span className="w-10 h-10 bg-gray-100 rounded border border-gray-300 inline-block align-middle text-center cursor-pointer" onClick={() => {updateNumber("minus")}}>-</span>
                <input className="h-[34px] w-[100px] text-center text-[26px] border border-gray-300 rounded inline-block align-middle" type="number" defaultValue={number}/>
                <span className="w-10 h-10 bg-gray-100 rounded border border-gray-300 inline-block align-middle text-center cursor-pointer" onClick={() => {updateNumber("plus")}}>+</span>
            </div>
        </div>
    )
}