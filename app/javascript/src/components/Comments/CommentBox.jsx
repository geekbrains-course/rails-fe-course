import React from 'react'
import Comments from './Comments'
import CommentForm from './CommentForm'
import { useQuery } from 'react-query'
const token = document.querySelector('meta[name="csrf-token"]').content;

const CommentBox = props => {
  const [comments, setComments] = React.useState([]);

  const { isLoading, data, error } = useQuery(['comments', props.post_id], () =>
    fetch(`${props.url}?post_id=${props.post_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
  )

  React.useEffect(() => {
    if (isLoading) {
      return
    }

    if (error) {
      console.log('Error:', error);
      return
    }

    setComments(data);
    console.log('Success:', data);
  }, [isLoading, data, error]);

  const handleCommentSubmit = React.useCallback((newComment) => {
    fetch('/api/v1/comments', {
      method: 'POST',
      headers: {
        'X-CSRF-Token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...newComment,
        post_id: props.post_id
      })
    })
    .then(response => response.json())
    .then((data) => {
      let newComments = comments.concat([data]);
      setComments(newComments);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  })

  return (
    <div className="container">
      <div className="commentBox panel panel-default">
        <div className="panel-body">
          <h1>Comment Box</h1>
          <Comments comments={comments} />
          <br/>
          <CommentForm onCommentSubmit={handleCommentSubmit} />
        </div>
      </div>
    </div>
  )
}

export default CommentBox;