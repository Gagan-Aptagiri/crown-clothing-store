import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	selectCartItems,
	selectCartItemsTotal,
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, totalPrice }) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((item) => item.name)}
			<div className="total">
				<span>TOTAL: ${totalPrice}</span>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	totalPrice: selectCartItemsTotal,
	cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPage);