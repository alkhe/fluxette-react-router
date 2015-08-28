import React from 'react';
import Router, { Route } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import { Context } from 'fluxette';
import flux from './flux';

import Index from './views/';
import Repos from './views/repos';
import RepoDetails from './views/repo.details';

class Root extends React.Component {
	render() {
		return (
			<Context flux={ flux }>
				{ () =>
					<Router history={ this.props.history }>
						<Route path='/' component={ Index }
							indexRoute={{ component: Repos }}>
							<Route path=':owner/:repo' component={ RepoDetails } />
						</Route>
					</Router>
				}
			</Context>
		);
	}
}

React.render(<Root history={ new BrowserHistory() } />, document.getElementById('root'));
