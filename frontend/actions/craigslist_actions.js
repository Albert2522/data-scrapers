import {posts} from '../../example'

export const RECEIVE_POSTINGS = "RECEIVE_POSTINGS";

export const fetchPostings = filters => dispatch => (
  posts()
    .then(postings => dispatch(receivePostings(postings)))
);

export const receivePostings = postings => ({
  type: RECEIVE_POSTINGS,
  postings
});
