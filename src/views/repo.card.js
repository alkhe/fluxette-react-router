import React from 'react';
import { Link } from 'react-router';
import { Card, CardTitle, CardAction, Button } from 'mdl-react';

export default class RepoCard extends React.Component {
	render() {
		let cardStyle = {
			display: 'inline-block',
			margin: '10px 50px',
			textAlign: 'left',
			background: '#46b6ac'
		};
		let actionStyle = {
			borderColor: 'rgba(255, 255, 255, 0.2)',
			background: '#fff'
		};
		let { repo } = this.props;
		return (
			<Card width='412' height='256' isAccent shadow={ 4 } style={ cardStyle }>
				<CardTitle height='203'>
					<h4 style={{ color: '#fff' }}>
						{ repo.name }
						<br />
						{ repo.full_name }
						<br />
						by { repo.owner.login }
					</h4>
				</CardTitle>
				<CardAction border style={ actionStyle }>
					<Button
						isPrimary
						type='FlatButton'>
						<Link to={ `/${ repo.owner.login }/${ repo.name }` }>
							Details
						</Link>
					</Button>
				</CardAction>
			</Card>
		);
	}
}
