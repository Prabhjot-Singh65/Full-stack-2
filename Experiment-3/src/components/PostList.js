import React, { useEffect, useState } from "react";

function PostList() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0,5)));

  }, []);

  return (
    <div>
      <h2>Posts (API Data)</h2>

      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}

    </div>
  );
}

export default PostList;