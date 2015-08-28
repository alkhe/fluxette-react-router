import React from 'react';
import { Loading } from 'mdl-react';

export default class FloatingLoader extends React.Component {
	render() {
		return this.props.loading
			? <div style={{ position: 'relative' }}>
				<div style={{ position: 'absolute', top: 20, left: 20 }}>
					<Loading type='Spinner' />
				</div>
			</div>
			: null;
	}
}
