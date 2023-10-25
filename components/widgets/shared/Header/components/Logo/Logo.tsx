import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/Logo.module.scss";

type Props = {
children?: ReactNode

}
const Logo = ({children}: Props) => {
  return (
    <>
       <div className={classNames(cl["logo-container"])}></div>
    </>
  );
};

export default Logo;