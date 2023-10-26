import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/Dots.module.scss";

type Props = {
  children?: ReactNode;
};
const Dots = ({ children }: Props) => {
  return (
    <>
      <ul className={classNames(cl["dots-container"])}>
        <li className={classNames(cl["dot"])}></li>
        <li className={classNames(cl["dot"])}></li>
        <li className={classNames(cl["dot"])}></li>
        <li className={classNames(cl["dot"])}></li>
        <li className={classNames(cl["dot"])}></li>
      </ul>
    </>
  );
};

export default Dots;
