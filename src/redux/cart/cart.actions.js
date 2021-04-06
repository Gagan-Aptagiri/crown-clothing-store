import cartActionTypes from './cart.types';

const toggleCartHidden = () => {
	return {
		type: cartActionTypes.TOGGLE_CART_HIDDEN,
	};
};

export default toggleCartHidden;
