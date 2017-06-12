import React, { Component } from 'react';
import PostEntry from './post.js';
import Posts from './Posts.js';

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <div className="Board-header">
          <h2>Message Board</h2>
        </div>
        <div className="Post-entry">
        <PostEntry />
      </div>
      <div className="Posts">
        <Posts />
      </div>
      </div>
    );
  }
}

export default Board;
