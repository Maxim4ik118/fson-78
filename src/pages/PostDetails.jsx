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
import { toast } from 'react-toastify';
import { setError, setIsLoading, setPostDetails } from 'redux/postDetailsReducer';

import { fetchPostDetails } from 'services/api';

const CommentsPage = lazy(() => import('./CommentsPage'));

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
// CTRL + SHIFT + L

// Робота з редаксом:
// 1. Встановити бібліотеку redux та react-redux
// 2. Сконфігурувати "store"
// 3. Зв'язати наш "store" з React додатком, через <Provider store={store}>
// 4. Створити редьюсер з початковим стейтом і
//    підключити цей редьюсер до "store" за допомогою "combineReducers"
// 5. Описати для кожної дії в редьюсері свій обробник/кейс/протокол
// 6. Підписатися на стейт безпосередньо в середині компоненти, за допомогою
//    "useSelector"
// 7. Отримати логістичну функцію "dispatch" за допомогою хука "useDispatch()"
// 8. Задіспатчити екшин(Надіслати інструкцію до редьюсеру) dispatch({ type: 'categories/setCategoryList', payload: catList })
// NOTE: Action - це об'єкт, в якого має бути обов'язкове поле type,
//       ще може бути payload - він не обов'язковий.
//       Редьюсер - це чиста функція, яка приймає в себе "state" та "action"
//       і повертає змінений стан.
//       dispatch - це логістична функція, яка приймає в себе "action"
//       і доставляє його до редьюсеру.

const PostDetails = () => {
  // const [postDetails, setPostDetails] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const { postDetails, isLoading, error } = useSelector(
  //   state => state.postDetails
  // );

  const postDetails = useSelector(state => state.postDetails.postDetails);
  const isLoading = useSelector(state => state.postDetails.isLoading);
  const error = useSelector(state => state.postDetails.error);
  const dispatch = useDispatch();

  const { postId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!postId) return;

    const fetchPostData = async () => {
      try {
        dispatch(setIsLoading(true));

        const postData = await fetchPostDetails(postId);
        dispatch(setPostDetails(postData));

        toast.success('Post details were successfully fetched!', toastConfig);
      } catch (error) {
        // dispatch({ type: 'postDetails/setError', payload: error.message });
        dispatch(setError(error.message));

        toast.error(error.message, toastConfig);
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchPostData();
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
            {/* /posts/:postId/comments */}
            <NavLink to="/comments">Comments</NavLink>
            {/* /comments */}
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
