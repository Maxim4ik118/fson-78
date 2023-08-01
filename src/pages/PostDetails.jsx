import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchPostDataThunk } from 'redux/postDetailsOperations';

const CommentsPage = lazy(() => import('./CommentsPage'));

const PostDetails = () => {
  const postDetails = useSelector(state => state.postDetails.postDetails);
  const isLoading = useSelector(state => state.postDetails.isLoading);
  const error = useSelector(state => state.postDetails.error);
  const dispatch = useDispatch();
  const location = useLocation();

  const { postId } = useParams();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!postId) return;

    dispatch(fetchPostDataThunk(postId));
  }, [postId, dispatch]);

  return (
    <div>
      <h1>PostDetails</h1>
      <Link to={backLinkHref.current}>Go back</Link>
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
      <Suspense
        fallback={
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
        }
      >
        <Routes>
          <Route path="comments" element={<CommentsPage />} />
        </Routes>{' '}
      </Suspense>
    </div>
  );
};

export default PostDetails;
