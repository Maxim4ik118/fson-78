import React from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

import useGetPosts from 'hooks/useGetPosts';

const HomePage = () => {
  const { posts, isLoading, error } = useGetPosts({ someData: 'Privet' });

  return (
    <div>
      <h1>Мій олюблений Реакт😂</h1>
      {error !== null && (
        <p className="c-error">
          Oops, some error occured. Please, try again later. Error: {error}
        </p>
      )}
      {isLoading && (
        <MutatingDots
          height="100"
          width="100"
          color="#5800a5"
          secondaryColor="#e08e00"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}

      {posts.length > 0 &&
        posts.map(post => {
          return (
            <Link className="post" key={post.id} to={`/posts/${post.id}`}>
              <strong>Id: {post.id}</strong>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </Link>
          );
        })}
    </div>
  );
};

export default HomePage;
