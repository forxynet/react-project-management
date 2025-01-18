import React from 'react'
import { useCollection } from '../../hooks/useCollection'

// styles
import './Dashboard.css'
import ProjectList from '../../components/ProjectList';
import ErrorMessages from '../../components/ErrorMessages';

export default function Dashboard() {
  const { documents, error } = useCollection('projects');


  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <ErrorMessages error={error} />}
      {documents && <ProjectList projects={documents} />}
    </div>
  )
}
