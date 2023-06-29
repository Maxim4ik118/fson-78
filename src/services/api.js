import axios from 'axios';

export const fetchPosts = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return data;
};

export const fetchPostDetails = async postId => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  return data;
};
