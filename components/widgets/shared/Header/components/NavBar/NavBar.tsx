import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/NavBar.module.scss";

type Props = {
children?: ReactNode

}
const NavBar = ({children}: Props) => {
  return (
    <>
       <div>NavBar</div>
    </>
  );
};

export default NavBar;