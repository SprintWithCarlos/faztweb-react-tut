import React, { Component } from "react";
import Post from "../Post/Post";

export default class PostsList extends Component {
  state = {
    posts: []
  };
  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    this.setState({ posts: data });
  }

  render() {
    return (
      <div>
        {this.state.posts.map(post => {
          return <Post key={post.id} title={post.title} body={post.body} />;
        })}
      </div>
    );
  }
}
