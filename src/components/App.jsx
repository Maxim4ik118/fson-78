import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { MutatingDots } from 'react-loader-spinner';

// import HomePage from 'pages/HomePage';
// import PostDetails from 'pages/PostDetails';

const HomePage = lazy(() => import('pages/HomePage'));
const PostDetails = lazy(() => import('pages/PostDetails'));
const SearchPage = lazy(() => import('pages/SearchPage'));

export const App = () => {
  return (
    <div>
      <p>Мій олюблений Реакт😂</p>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">Search</NavLink>
        </nav>
      </header>
      <main>
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
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/posts/:postId/*" element={<PostDetails />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
