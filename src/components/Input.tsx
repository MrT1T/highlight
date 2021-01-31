import React from 'react'

type InputProps = {
  name: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  id: string
}

const Input = ({ name, placeholder, onChange, value, id }: InputProps) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default Input
