import React from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';

// import BookForm from './BookForm/BookForm';
// import BookList from './BookList/BookList';
import Modal from './Modal/Modal';

// import booksData from '../books.json';
import { fetchPostDetails, fetchPosts } from 'services/api';

// const books = booksData.books;

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

export class App extends React.Component {
  state = {
    modal: { isOpen: false, visibleData: null },
    posts: [],
    isLoading: false,
    error: null,
    selectedPostId: null,
  };

  onOpenModal = data => {
    this.setState({
      modal: {
        isOpen: true,
        visibleData: data,
      },
    });
  };

  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        visibleData: null,
      },
    });
  };

  onSelectPostId = postId => {
    this.setState({ selectedPostId: postId });
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const posts = await fetchPosts();
      this.setState({ posts });
      toast.success('Your posts were successfully fetched!', toastConfig);
    } catch (error) {
      this.setState({ error: error.message });
      toast.error(error.message, toastConfig);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.modal.isOpen !== this.state.modal.isOpen) {
      console.log('МИ ВІДКРИЛИ АБО ЗАКРИЛИ МОДАЛКУ');
    }

    if (prevState.selectedPostId !== this.state.selectedPostId) {
      try {
        this.setState({ isLoading: true });
        const postDetails = await fetchPostDetails(this.state.selectedPostId);
        this.setState({ modal: { isOpen: true, visibleData: postDetails } });
        toast.success('Post details were successfully fetched!', toastConfig);
      } catch (error) {
        this.setState({ error: error.message });
        toast.error(error.message, toastConfig);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Мій олюблений Реакт😂</h1>
        {this.state.modal.isOpen && (
          <Modal
            onCloseModal={this.onCloseModal}
            visibleData={this.state.modal.visibleData}
          />
        )}
        {this.state.error !== null && (
          <p className="c-error">
            Oops, some error occured. Please, try again later. Error:{' '}
            {this.state.error}
          </p>
        )}
        {this.state.isLoading && (
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
        {this.state.posts.length > 0 &&
          this.state.posts.map(post => {
            return (
              <button
                className="post"
                onClick={() => this.onSelectPostId(post.id)}
                type="button"
                key={post.id}
              >
                <strong>Id: {post.id}</strong>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </button>
            );
          })}
      </div>
    );
  }
}
