import React, { useEffect } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchCommentsThunk } from 'redux/commentsReducer';

const CommentsPage = () => {
  const dispatch = useDispatch();
  const { comments, isLoading, error } = useSelector(state => state.comments);
  const { postId } = useParams();

  useEffect(() => {
    if (!postId) return;

    dispatch(fetchCommentsThunk(postId))
  }, [postId, dispatch]);

  return (
    <div>
      <h1>CommentsPage</h1>
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
      <ul>
        {comments?.length > 0 &&
          comments.map(comment => (
            <li key={comment.id}>
              <h2>{comment.email}</h2>
              <p>{comment.body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CommentsPage;
