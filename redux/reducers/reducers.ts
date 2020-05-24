import { POSTS_FETCH_SUCCESS, CURRENT_POST_DATA, POST_DELETED } from '../actions/actions';
import { ActionTypes } from '../types';
export type Post = {
  id: number;
  body: string;
  title: string;
};

export type State = {
  list: Post[];
  loading: boolean;
  currentPost?: Post;
};

export const initialState: State = {
  list: [],
  loading: true,
  currentPost: null,
};

export function postsReducer(state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case POSTS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.list,
      };
    case CURRENT_POST_DATA:
      return {
        ...state,
        currentPost: action.post,
      };
    case POST_DELETED:
      return {
        ...state,
        list: state.list.filter((post) => post.id !== action.id),
      };

    default:
      return state;
  }
}
