import axios from 'axios';
import { Dispatch } from 'redux';
import { Post } from '../reducers/reducers';
import {
  CreatePostAction,
  CurrentPostAction,
  DeletePostAction,
  FetchPostsAction,
  FetchPostsSuccessAction,
} from '../types';

export const POSTS_FETCH = 'POSTS_FETCH';
export const POSTS_FETCH_SUCCESS = 'POSTS_FETCH_SUCCESS';
export const POSTS_FETCH_ERROR = 'POSTS_FETCH_ERROR';
export const CURRENT_POST_DATA = 'CURRENT_POST_DATA';
export const CREATE_NEW_POST = 'CREATE_NEW_POST';
export const POST_DELETED = 'POST_DELETED';

const url = 'https://simple-blog-api.crew.red/posts';

export const fetchPosts = () => (dispatch: Dispatch<FetchPostsAction | FetchPostsSuccessAction>) => {
  dispatch({ type: POSTS_FETCH });
  axios.get(url).then(({ data }) => {
    dispatch({
      type: POSTS_FETCH_SUCCESS,
      list: data,
    });
  });
};

export const createPost = (content) => (dispatch: Dispatch<CreatePostAction>) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  dispatch({ type: CREATE_NEW_POST });
  axios.post(url, content, config).then((response) => {
    console.log('saved successfully!');
  });
};

export const deletePost = (id: number) => (dispatch: Dispatch<DeletePostAction>) => {
  const url = `https://simple-blog-api.crew.red/posts/${id}`;
  axios.delete(url).then((response) => {
    console.log(response);
    dispatch({
      type: POST_DELETED,
      id,
    });
  });
};

export const currentPost = (post: Post): CurrentPostAction => {
  return {
    type: CURRENT_POST_DATA,
    post: post,
  };
};
