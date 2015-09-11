import React from 'react';
import { createHistory } from 'history';
import { Context } from 'fluxette-react';
import flux from './flux';

import Routes from './routes';

class Root extends React.Component {
	render() {
		return (
			<Context flux={ this.props.flux }>
				{ () => <Routes history={ this.props.history } /> }
			</Context>
		);
	}
}

React.render(<Root flux={ flux } history={ createHistory() } />, document.getElementById('root'));
