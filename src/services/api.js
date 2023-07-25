import axios from 'axios';

const JSON_PLACEHOLDER_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
    const { data } = await axios.get(`${JSON_PLACEHOLDER_BASE_URL}/posts`);
    // const response = await fetch(`${JSON_PLACEHOLDER_BASE_URL}/posts`);
    // if(!response.ok) throw new Error(response.error.message)
    // const data = await response.json();
    // return data;
    return data;
};

export const fetchPostDetails = async postId => {
  const { data } = await axios.get(
    `${JSON_PLACEHOLDER_BASE_URL}/posts/${postId}`
  );
  return data;
};

export const fetchPostComments = async postId => {
  const { data } = await axios.get(
    `${JSON_PLACEHOLDER_BASE_URL}/posts/${postId}/comments`
  );
  return data;
};
