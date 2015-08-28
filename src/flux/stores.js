import { Shape, Reducer } from 'fluxette';
import { SEARCH, REPO } from './types';

export default Shape({
	repos: Reducer([], {
		[SEARCH.SUCCESS]: (repos, action) => action.repos
	}),
	details: Reducer(null, {
		[REPO.REQUEST]: () => null,
		[REPO.SUCCESS]: (repo, action) => action.repo
	}),
	loading: Reducer(false, {
		[SEARCH.REQUEST]: () => true,
		[SEARCH.SUCCESS]: () => false,
		[REPO.REQUEST]: () => true,
		[REPO.SUCCESS]: () => false
	})
});
