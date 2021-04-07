//Returns an array of cartItems where each arrayItem is an object
export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id,
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem,
		);
	}
	//If the item we are trying to add isn't in the cart, then we return an array concatenated with this new item,
	//along with the previous state of the cartItems
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
