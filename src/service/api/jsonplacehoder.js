import { JSON_axios } from '../JSON_axios';

export const FETCH_JSON = {
  GET: () => JSON_axios.get('/posts'),
  POST: (data) => JSON_axios.post('/posts', data),
  PUT: (data) => JSON_axios.put('/posts/1', data),
  PATCH: (data) => JSON_axios.patch('/posts/1', data),
  DELETE: () => JSON_axios.delete('/posts/1'),
};
