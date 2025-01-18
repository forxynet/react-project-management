import React from 'react'

// styles
import './ProjectList.css'

export default function ProjectList({ documents }) {
  return (
    <div>
      {documents.map(doc => (
        <p key={doc.id}>{doc.name}</p>
      ))}
    </div>
  )
}
