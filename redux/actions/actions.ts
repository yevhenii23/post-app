import axios from 'axios';
import { string } from 'prop-types';

export const POSTS_FETCH_SUCCESS = 'POSTS_FETCH_SUCCESS';
export const POSTS_FETCH_LIST = 'POSTS_FETCH_LIST';
export const CURRENT_POST_DATA = 'CURRENT_POST_DATA';
export const CREATE_NEW_POST = 'CREATE_NEW_POST';
export const POST_DELETED = 'POST_DELETED';

export const fetchPosts = () => (dispatch) => {
  const url = 'https://simple-blog-api.crew.red/posts';

  dispatch({ type: POSTS_FETCH_LIST });
  axios.get(url).then(({ data: list }) => {
    dispatch({
      type: POSTS_FETCH_SUCCESS,
      list: list,
    });
  });
};

export const createPost = (content) => (dispatch) => {
  const url = 'https://simple-blog-api.crew.red/posts';
  const config = { headers: { 'Content-Type': 'application/json' } };
  dispatch({ type: CREATE_NEW_POST });
  axios.post(url, content, config).then((response) => {
    console.log('saved successfully!');
  });
};

export const deletePost = (id) => (dispatch) => {
  const url = `https://simple-blog-api.crew.red/posts/${id}`;
  axios.delete(url).then((response) => {
    console.log(response);
    dispatch({
      type: POST_DELETED,
      id,
    });
  });
};

export const currentPost = (post) => {
  return {
    type: CURRENT_POST_DATA,
    post: post,
  };
};
