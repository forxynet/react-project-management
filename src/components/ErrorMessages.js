import React from 'react'

export default function ErrorMessages({ error }) {
  return (
    <p className='error'>
      {error}
    </p>
  )
}
