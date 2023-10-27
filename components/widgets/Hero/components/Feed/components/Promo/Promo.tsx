import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/Promo.module.scss";

type Props = {
  children?: ReactNode,
  worksCount: number,
  current: number
};
const Promo = ({ children, worksCount = 0, current = 1 }: Props) => {
  return (
    <>
      <div
        className={classNames(cl["promo-container"])}
        style={{
          transform: `translateX(${100 * (worksCount - (current - 1))}%`,
        }}
      >
        <img src="" alt="" />
      </div>
    </>
  );
};

export default Promo;
