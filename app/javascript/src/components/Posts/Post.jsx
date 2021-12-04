import * as React from 'react';
import { Card } from 'react-bootstrap'
import CommentBox from '../Comments/CommentBox'
import { useParams } from 'react-router-dom';
import Likes from '../Likes/Likes';
import contentParser from 'html-react-parser';

const Post = props => {
  const { id } = useParams();
  const [name, setName] = React.useState('None');
  const [title, setTitle] = React.useState('None');
  const [desc, setDesc] = React.useState('Empty');

  React.useEffect(() => {
    fetch(`/posts/${id}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      setName(data.name);
      setTitle(data.title);
      setDesc(data.content.body || 'Empty');
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, []);

  return (
    <Card className='text-center'>
      <Card.Header>
        <div>
          <p> Name: {name} </p>
          <p> Title: {title} </p>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {contentParser(desc)}
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
