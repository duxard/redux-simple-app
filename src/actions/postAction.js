import { DELETE_POST } from './types';

export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    id
  }
};
