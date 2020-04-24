import { CartItem, ShopItem } from "../../pages/shop/shop.data";

export const addItemToCart = (cartItems: CartItem[], cartItemToAdd: ShopItem) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id ?
        {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1}];
}