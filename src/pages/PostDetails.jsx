import React, { useEffect, useState } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchPostDetails } from 'services/api';
import CommentsPage from './CommentsPage';

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

const PostDetails = () => {
  const [postDetails, setPostDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    if (!postId) return;

    const fetchPostData = async () => {
      try {
        setIsLoading(true);

        const postData = await fetchPostDetails(postId);
        setPostDetails(postData);
        toast.success('Post details were successfully fetched!', toastConfig);
      } catch (error) {
        setError(error.message);
        toast.error(error.message, toastConfig);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostData();
  }, [postId]);

  return (
    <div>
      <h1>PostDetails</h1>
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
      {postDetails !== null && (
        <div>
          <h2>Title: {postDetails.title}</h2>
          <p>ID: {postDetails.id}</p>
          <p>Body: {postDetails.body}</p>
          <div>
            <NavLink to="comments">Comments</NavLink>
          </div>
        </div>
      )}
      <Routes>
        <Route path="comments" element={<CommentsPage />} />
      </Routes>
    </div>
  );
};

export default PostDetails;
