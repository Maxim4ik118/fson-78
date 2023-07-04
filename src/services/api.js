import axios from 'axios';

const JSON_PLACEHOLDER_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
  const { data } = await axios.get(`${JSON_PLACEHOLDER_BASE_URL}/posts`);
  return data;
};

export const fetchPostDetails = async postId => {
  const { data } = await axios.get(
    `${JSON_PLACEHOLDER_BASE_URL}/posts/${postId}/comments`
  );
  return data;
};
