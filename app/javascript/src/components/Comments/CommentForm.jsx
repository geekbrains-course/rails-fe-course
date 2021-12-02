import React from 'react'
import { Button } from 'react-bootstrap'

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let author = e.target[0].value;
    let text = e.target[1].value;
    if(!text || !author) {
      alert("Please enter your name and comment");
      return;
    }
    this.props.onCommentSubmit({author:author, text:text});
  }
  
  render() {
    return (
      <div className="commentForm panel panel-default">
        <div className="panel-body">
          <form className="form" onSubmit={this.handleSubmit.bind(this)}>
            <input className="form-control" type="text" placeholder="Your name" ref="author" /><br/>
            <input className="form-control" type="text" placeholder="Say somthing here..." ref="text" /><br/>
            <Button className="btn btn-default" type="submit" > Post </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentForm;