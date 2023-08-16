import { FC } from 'react'

interface InputProps {
  placeholder: string
  className?: string
  HTMLType: string
}

const Input: FC<InputProps> = ({ placeholder, HTMLType, className }) => {
  return (
    <input
      className={`rounded-md px-4 py-2 bg-gray-700 ${className}`}
      type={HTMLType}
      placeholder={placeholder}
    />
  )
}
export default Input
