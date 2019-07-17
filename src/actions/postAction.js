import axios from 'axios';

import {
  DELETE_POST,
  INC_COUNT,
  ADD_POST,
  GET_POSTS } from './types';

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

export const addPost = (title, text) => dispatch => {
  axios
    .post('https://asta-web-1.herokuapp.com/api/post', {title, text})
    .then(response => {
      if(response.status === 200 && response.statusText === 'OK') {
        console.log('success');
        dispatch({
          type: ADD_POST,
          payload: response.data
        })
      } else {
        throw new Error(`Server response status: ${response.status}`);
      }
    })
    .catch(error => {
      console.error(`Failed to save to Mongo: ${error}`)
      dispatch({
        type: 'ADD_POSTS_ERROR'
      })
    });
}

export const getPosts = () => dispatch => {
  axios
    .get('https://asta-web-1.herokuapp.com/api/post')
    .then(response => {
      dispatch({
        type: GET_POSTS,
        payload: response.data
      })
    })
    .catch(err =>
      dispatch({
        type: 'GET_POSTS_ERROR',
        payload: null
      })
    );
}
