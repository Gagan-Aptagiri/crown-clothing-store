import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
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
			<CustomButton inverted> Add to Cart </CustomButton>
		</div>
	);
};

export default CollectionItem;
