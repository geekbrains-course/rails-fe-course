import * as React from 'react';
import { Card } from 'react-bootstrap'
import CommentBox from '../Comments/CommentBox'
import { useParams } from 'react-router-dom';
import Likes from '../Likes/Likes'

const Post = props => {
  const { id } = useParams();
  const [name, setName] = React.useState('None');
  const [desc, setDesc] = React.useState('Empty');

  React.useEffect(() => {
    fetch(`/api/v1/posts/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      setName(data.name);
      setDesc(data.description);
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, []);

  return (
    <Card className='text-center'>
      <Card.Header>Post: {name}</Card.Header>
      <Card.Body>
        <Card.Text>
          {desc}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='text-muted'>
        <CommentBox url='/api/v1/comments' post_id={id} />
        <br/>
        <Likes postId={id} />
      </Card.Footer>
    </Card>
  );
};

export default Post;