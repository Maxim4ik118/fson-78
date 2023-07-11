import React, { useEffect, useState } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchPostComments } from 'services/api';

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

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    if (!postId) return;

    const fetchPostData = async () => {
      try {
        setIsLoading(true);

        const comments = await fetchPostComments(postId);
        setComments(comments);
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
