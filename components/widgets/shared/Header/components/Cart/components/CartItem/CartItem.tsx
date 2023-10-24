import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/CartItem.module.scss";

type Props = {
children?: ReactNode

}
const CartItem = ({children}: Props) => {
  return (
    <>
       <div>CartItem</div>
    </>
  );
};

export default CartItem;