import React from 'react'
import './Avatar.css';

export default function Avatar({ url }) {
  return (
    <div className='avatar'>
      <img src={url} alt="user avatar" />
    </div>
  )
}
