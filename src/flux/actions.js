import { SEARCH, REPO } from './types';
import axios from 'axios';

let searchReposBy = term =>
	axios.get(
		'https://api.github.com/search/repositories',
		{ params: { q: term } }
	);

let getRepo = (owner, name) =>
	axios.get(`http://api.github.com/repos/${owner}/${name}`);

export default {
	search: term =>
		({ dispatch }) => {
			dispatch({ type: SEARCH.REQUEST });
			searchReposBy(term)
				.then(res => ({ type: SEARCH.SUCCESS, repos: res.data.items }))
				.then(dispatch);
		},
	getRepo: (owner, name) =>
		({ dispatch }) => {
			dispatch({ type: REPO.REQUEST });
			getRepo(owner, name)
				.then(res =>({ type: REPO.SUCCESS, repo: res.data }))
				.then(dispatch);
		}
}
