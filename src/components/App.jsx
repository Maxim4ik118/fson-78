import { HomePage } from 'pages/HomePage';
import PostDetails from 'pages/PostDetails';
import SearchPage from 'pages/SearchPage';
import { NavLink, Route, Routes } from 'react-router-dom';

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/posts/:postId/*" element={<PostDetails />} />
        </Routes>
      </main>
    </div>
  );
};
