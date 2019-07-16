import {
  DELETE_POST,
  INC_COUNT,
  ADD_POST } from './types';

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

export const addPost = (title, text) => {
  return {
    type: ADD_POST,
    title,
    text
  }
}
