import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import './collections-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="collection-footer">
				<div className="name">{name}</div>
				<div className="price">{price}</div>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>
				{' '}
				Add to Cart{' '}
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addItem: (item) => {
			return dispatch(addItem(item));
		},
	};
};

export default connect(null, mapDispatchToProps)(CollectionItem);
