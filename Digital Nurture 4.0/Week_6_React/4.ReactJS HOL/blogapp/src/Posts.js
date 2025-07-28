import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
      errorMessage: ''
    };
  }

  // Step 4 & 5: Fetch posts using loadPosts() in componentDidMount()
  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();

      // Create list of Post objects
      const postList = data.map(item => new Post(item.id, item.title, item.body));
      this.setState({ posts: postList });
    } catch (error) {
      this.setState({ hasError: true, errorMessage: error.message });
    }
  };

  // Step 6: Display posts
  render() {
    if (this.state.hasError) {
      return <h3>Error occurred: {this.state.errorMessage}</h3>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }

  // Step 7: Catch rendering errors
  componentDidCatch(error, info) {
    alert(`Error in rendering component: ${error.toString()}`);
    this.setState({ hasError: true, errorMessage: error.toString() });
  }
}

export default Posts;
