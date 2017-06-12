import React, { Component } from 'react';

class Posts extends Component {
  render() {
    return (
      <div className="Posts">
        <div className="image">
        <img src="https://static.pexels.com/photos/30222/pexels-photo-30222.jpg" width="150px" height="150px"/>
      </div>
      <div className="Post-title">
        <h2>Performing Live</h2>
      </div>
      <div className="Username">
        <h3>Cameron Owens</h3>
      </div>
      <div className="Post-body">
        <p>
          Nobody likes to crack notes, miss shifts, or play out of tune. Especially in front of an audience. But unless we decide to give up the experience of performing live, that’s just something that comes with the territory.
        </p>
      </div>
      </div>
    );
  }
}

export default Posts;
