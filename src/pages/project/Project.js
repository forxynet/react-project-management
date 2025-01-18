import React from 'react'
import { useParams } from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'
import ErrorMessages from '../../components/ErrorMessages'
import ProjectSummary from './ProjectSummary'

import './Project.css'
import ProjectComments from './ProjectComments'

export default function Project() {
  const { id } = useParams()
  const { error, document } = useDocument('projects', id)

  if (error) {
    return <ErrorMessages error={error} />
  }

  if (!document) {
    return <div className='loading'>Loading...</div>
  }

  return (
    <div className='project-details'>
      <ProjectSummary project={document} />
      <ProjectComments />
    </div>
  )
}
