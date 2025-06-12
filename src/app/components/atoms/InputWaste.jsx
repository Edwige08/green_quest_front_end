'use client'

import {useState} from 'react'

export default function InputWaste({wasteTitle, onChange, wasteId, wastePoints}) {
  const [number, setNumber] = useState(0)

  const updateNumber = (sign) => {
    let newNumber
    if (sign === 'minus' && number > 0) {
      newNumber = number - 1
    } else if (sign === 'plus') {
      newNumber = number + 1
    } else {
      return
    }
    setNumber(newNumber)
    onChange(newNumber, wasteId, wastePoints)
  }

  const handleInputChange = (e) => {
    const value = Math.max(0, parseInt(e.target.value) || 0)
    setNumber(value)
    onChange(value, wasteId, wastePoints)
  }

  return (
    <div className="input-waste mb-3 flex items-center">
      <div className="flex h-[34px] grow-1 items-center rounded border border-gray-300 px-2">
        <p className="text-[16px]">{wasteTitle}</p>
      </div>
      <div className="flex items-center text-black">
        <span
          className="inline-block h-10 w-6 cursor-pointer text-center align-middle text-[24px]"
          onClick={() => {
            updateNumber('minus')
          }}
        >
          -
        </span>
        <input
          className="no-apparence mx-2 inline-block h-[34px] w-[60px] rounded border border-gray-300 text-center align-middle text-[16px]"
          type="number"
          value={number}
          onChange={handleInputChange}
        />
        <span
          className="inline-block h-10 w-6 cursor-pointer text-center align-middle text-[24px]"
          onClick={() => {
            updateNumber('plus')
          }}
        >
          +
        </span>
      </div>
    </div>
  )
}
