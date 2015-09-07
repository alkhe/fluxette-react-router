import React, { PropTypes } from 'react';
import { connect } from 'fluxette-react';
import { Layout, Button, Icon } from 'mdl-react';
import FloatingLoader from './floating.loader';

@connect()
export default class Index extends React.Component {
	static contextTypes = {
		history: PropTypes.any.isRequired
	}
	goBack() {
		this.context.history.goBack();
	}
	render() {
		let links = [
			<Button type='IconButton'>
				<a onClick={ ::this.goBack }><Icon>arrow_back</Icon></a>
			</Button>
		];
		return (
			<Layout
				title='Fluxette - React Router - Github Search'
				isFixedHeader
				headerLinks={ links }>
				<FloatingLoader loading={ this.state.loading } />
				{ this.props.children }
			</Layout>
		);
	}
};
