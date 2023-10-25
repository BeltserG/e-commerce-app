import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/Header.module.scss";

import Cart from "./components/Cart/Cart";
import Logo from "./components/Logo/Logo";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import Login from "./components/Login/Login";

type Props = {
  children?: ReactNode;
};
const Header = ({ children }: Props) => {
  return (
    <>
      <header className={classNames(cl["header-container"])}>
        <Logo />
        <SearchBar />
        <Cart />
        {/* <NavBar /> */}
        <Login/>
      </header>
    </>
  );
};

export default Header;