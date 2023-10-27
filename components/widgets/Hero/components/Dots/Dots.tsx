import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/Dots.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";

type Props = {
  children?: ReactNode;
};
const Dots = ({ children }: Props) => {
  const carouselLength = useSelector(
    (state: RootState) => state.promoCarousel.length
  );
  const current = useSelector(
    (state: RootState) => state.promoCarousel.current
  );

  const dots = [];
  for (let i = 0; i < carouselLength; i++) {
    const active = i === current - 1;
    dots.push(<li className={classNames(cl["dot"], active ? cl["active"]: "")}></li>);
  }
  return (
    <>
      <ul className={classNames(cl["dots-container"])}>{dots}</ul>
    </>
  );
};

export default Dots;
