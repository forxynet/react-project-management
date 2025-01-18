import React from 'react'
import './Avatar.css';

export default function Avatar({ user }) {
  return (
    <div className='avatar'>
      {user && (
        <>
          <img src={user.photoURL} alt="user avatar" />
        </>
      )}
    </div>
  )
}