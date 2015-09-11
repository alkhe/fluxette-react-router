import React from 'react';
import Router, { Route } from 'react-router';

import Index from './views/';
import Repos from './views/repos';
import RepoDetails from './views/repo.details';

export default class extends React.Component {
	render() {
		return (
			<Router history={ this.props.history }>
				<Route path='/' component={ Index }
					indexRoute={{ component: Repos }}>
					<Route path=':owner/:repo' component={ RepoDetails } />
				</Route>
			</Router>
		)
	}
}
