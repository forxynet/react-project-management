import { useState } from 'react'
import { timestamp } from '../../firebase/config'
import { useAuthContext } from '../..//hooks/useAuthContext'

export default function ProjectComments() {
  const [newComment, setNewComment] = useState()
  const { user } = useAuthContext();

  function handleSubmit(e) {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random()
    }
    console.log(commentToAdd)
  }

  return (
    <div className='project-comments'>
      <h4>Project Comments:</h4>

      <form className='add-comment' onSubmit={handleSubmit}>
        <label>
          <span>Add new comment:</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          />
        </label>
        <button className="btn">Add Comment</button>
      </form>
    </div>
  )
}
