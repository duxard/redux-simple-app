import { DELETE_POST, INC_COUNT } from './types';

export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    id
  }
};

export const incrementCounter = () => {
  return {
    type: INC_COUNT
  }
}
