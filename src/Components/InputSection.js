import React, { useState } from 'react'

const InputSection = () => {
    const [phoneNumber, setPhoneNumber] = useState("")
    function handleChange(e){
        const input = e.target.value
        setPhoneNumber(input.length <=  10 && !isNaN(Number(input)) && input || phoneNumber)
    }
  return (
      <input  onChange={handleChange}
       id = "phone number"
        value={phoneNumber}
       />
  )
}

export default InputSection
