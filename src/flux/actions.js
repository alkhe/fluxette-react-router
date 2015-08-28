import { SEARCH, REPO } from './types';
import ax from 'axios';

export default {
	search: term =>
		({ dispatch }) => {
			dispatch({ type: SEARCH.REQUEST });
			ax
				.get('https://api.github.com/search/repositories',
					{ params: { q: term } }
				).then(res => {
					dispatch({ type: SEARCH.SUCCESS, repos: res.data.items });
				})
		},
	getRepo: (owner, name) =>
		({ dispatch }) => {
			dispatch({ type: REPO.REQUEST });
			ax
				.get(`http://api.github.com/repos/${owner}/${name}`)
				.then(res => {
					dispatch({ type: REPO.SUCCESS, repo: res.data });
				})
		}
}
