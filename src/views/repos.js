import React from 'react';
import { connect } from 'fluxette-react';
import RepoCard from './repo.card.js';
import { search } from '../flux/actions';
import { TextField } from 'mdl-react';

@connect()
export default class Repos extends React.Component {
	search(e) {
		e.preventDefault();
		this.dispatch(search(this.refs.search.getValue()));
	}
	render() {
		let repos = this.state.repos.map(repo => <RepoCard key={ repo.id } repo={ repo } />);
		return (
			<div style={{ textAlign: 'center' }}>
				<form onSubmit={ ::this.search }>
					<TextField
						labelText='Enter a search term...'
						ref='search'
					/>
				</form>
				{ repos }
			</div>
		);
	}
}
