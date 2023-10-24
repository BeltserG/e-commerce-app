import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/Header.module.scss";

import Cart from "./components/Cart/Cart";
type Props = {
  children?: ReactNode;
};
const Header = ({ children }: Props) => {
  return (
    <>
      <div>
        <Cart />
      </div>
    </>
  );
};

export default Header;