import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";

import classNames from "classnames";
import cl from "./styles/Cart.module.scss";

import CartItem from "./components/CartItem/CartItem";
import { addItem, removeItem, clearCart } from '@/store/slices/cartSlice';
import { RootState } from "@/store/store";

type Props = {
children?: ReactNode
}

const Cart = ({children}: Props) => {
  const items = useSelector((state: RootState) => state.cart.items);
  const jsxItems = items.map((item)=> <CartItem />);
  return (
    <div className={classNames(cl["cart-container"])}>
      <img className={classNames(cl["cart__icon"])} src="/icons/shopping_cart.svg" alt="cart" />
       {/* <div className={classNames(cl["cart-window"])}>
        <h3 className={classNames(cl["cart__heading"])}></h3>
        <div className={classNames(cl["cart__items"])}>
          {jsxItems}
        </div>
        <div className={classNames(cl["cart__total"])}></div>
        <div className={classNames(cl["cart__checkout"])}></div>
       </div> */}
    </div>
  );
};

export default Cart;