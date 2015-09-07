import Shape from 'reducer/shape';
import Leaf from 'reducer/leaf';
import { SEARCH, REPO } from './types';

export default Shape({
	repos: Leaf([], {
		[SEARCH.SUCCESS]: (repos, action) => action.repos
	}),
	details: Leaf(null, {
		[REPO.REQUEST]: () => null,
		[REPO.SUCCESS]: (repo, action) => action.repo
	}),
	loading: Leaf(false, {
		[SEARCH.REQUEST]: () => true,
		[SEARCH.SUCCESS]: () => false,
		[REPO.REQUEST]: () => true,
		[REPO.SUCCESS]: () => false
	})
});
