import React from 'react'

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     <div className="comment panel panel-default">
        <div className="panel-heading">
          <h4>{this.props.author}</h4>
        </div>
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Comment;