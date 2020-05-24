import { CREATE_NEW_POST, POSTS_FETCH, POSTS_FETCH_SUCCESS, POST_DELETED, CURRENT_POST_DATA } from './actions/actions';
import { Post } from './reducers/reducers';

export type FetchPostsAction = { type: typeof POSTS_FETCH };
export type FetchPostsSuccessAction = { type: typeof POSTS_FETCH_SUCCESS; list: Post[] };
export type CreatePostAction = { type: typeof CREATE_NEW_POST };
export type DeletePostAction = { type: typeof POST_DELETED; id: number };
export type CurrentPostAction = { type: typeof CURRENT_POST_DATA; post: Post };

export type ActionTypes =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | CurrentPostAction
  | CurrentPostAction
  | DeletePostAction;
