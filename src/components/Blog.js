import React from 'react';
import Header from 'components/Header';

function Blog(props) {
  const {data = []} = props;

  return <div className="App">
    <Header />
    <ul className="blog">
      {data && data.map(item => 
        <li key={item.id} className="post">
          <h2>{item.title}</h2>
          <div>{item.body}</div>
        </li>
      )}
    </ul>
  </div>
}

export default Blog;