import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem }) => {
	const { imageUrl, name, quantity, price } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">{quantity}</span>
			<span className="price">{price}</span>
			<div
				className="remove-button"
				onClick={() => {
					clearItem(cartItem);
				}}>
				<span>&#10005;</span>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		clearItem: (item) => dispatch(clearItemFromCart(item)),
	};
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
