import React from 'react';
import { connect } from 'fluxette-react';
import { getRepo } from '../flux/actions';
import { Card, CardTitle, CardSupportingText, CardAction, Button } from 'mdl-react';

let pluralify = (n, text) => n + text + (n === 1 ? '' : 's');

@connect()
export default class RepoDetails extends React.Component {
	componentWillMount() {
		let { params } = this.props;
		this.dispatch(getRepo(params.owner, params.repo));
	}
	render() {
		let repo = this.state.details;
		let card = repo !== null
			? (
				<Card width='320' shadow={ 8 } style={{ display: 'inline-block', textAlign: 'left' }}>
					<CardTitle height='100'
						style={{ color: '#fff', background: '#46B6AC' }}>
						{ repo.full_name }
					</CardTitle>
					<CardSupportingText>
						<h6>{ repo.description }</h6>
						{ pluralify(repo.forks, ' Fork') }
						<br />
						{ pluralify(repo.open_issues, ' Issue') }
						<br />
						{ pluralify(repo.stargazers_count, ' Stargazer') }
					</CardSupportingText>
					<CardAction border >
						<Button isPrimary type='FlatButton'>
							<a href={ repo.html_url }>Visit</a>
						</Button>
					</CardAction>
				</Card>
			) : null;
		return (
			<div style={{ textAlign: 'center', padding: 100 }}>
				{ card }
			</div>
		)
	}
}
