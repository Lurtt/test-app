import React from 'react'

export default function Select({ options, value, ...rest }) {
  return (
    <select {...rest} value={value ? value : 'placeholder'}>
      <option value="placeholder" disabled>
        Select your option
      </option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
