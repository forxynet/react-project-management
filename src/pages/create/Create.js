import React, { useState } from 'react'
import './Create.css'
export default function Create() {
  const [name, setName] = useState();
  const [details, setDetails] = useState();
  const [dueDate, setDueDate] = useState();
  const [category, setCategory] = useState();
  const [assignedUsers, setAssignedUsers] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, details, dueDate)

  }
  return (
    <div className='create-form'>
      <h2 className=''>Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Project details:</span>
          <textarea
            type=""
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          />
        </label>
        <label>
          <span>Set due date:</span>
          <input
            type="date"
            required
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>
        <label>
          <span>Project category:</span>
          {/* category selelct here */}
        </label>
        <label>
          <span>Assign to:</span>
          {/* assignee select here */}
        </label>
        <button className='btn'>Add project</button>
      </form>
    </div>
  )
}
