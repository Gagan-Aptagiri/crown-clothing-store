import React from 'react';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

class CartIcon extends React.Component {
	render() {
		return (
			<div className="cart-icon">
				<ShoppingIcon className="shopping-icon" />
				<span className="item-count">0</span>
			</div>
		);
	}
}

export default CartIcon;
