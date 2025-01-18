import React from 'react'
import Avatar from './Avatar'
import formatDistanceToNow from 'data-fns/formatDistanceToNow'

export default function CommentList({ project }) {
  return (
    <>
      {project.comments.length > 0 && <>
        <h4>Project Comments</h4>
        <ul>
          {project.comments.map(comment => (
            <li key={comment.id}>
              <div className="comment-author">
                <Avatar src={comment.photoURL} />
                <p>{comment.displayName}</p>
              </div>
              <div className="comment-date">
                <p>{formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true })}</p>
              </div>
              <div className="comment-content">
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
      }
    </>
  )
}
