import React, { useEffect, useState } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchPostDetails, fetchPosts } from 'services/api';

const toastConfig = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

export const HomePage = () => {
  const [posts, setPosts] = useState(
    () => JSON.parse(localStorage.getItem('posts')) ?? []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostsData = async () => {
      try {
        setIsLoading(true);

        const posts = await fetchPosts();

        setPosts(posts);
        toast.success('Your posts were successfully fetched!', toastConfig);
      } catch (error) {
        setError(error.message);
        toast.error(error.message, toastConfig);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostsData();
  }, []);


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
