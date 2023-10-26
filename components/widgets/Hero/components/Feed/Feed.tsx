import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/Feed.module.scss";

import Promo from "./components/Promo/Promo";

type Props = {
  children?: ReactNode;
};
const Feed = ({ children }: Props) => {
  const feedItems = [1, 2, 3];
  const promos = feedItems.map((item, index) => <Promo key={item}/>)
  return (
    <>
      <div className={classNames(cl["feed-container"])}>{promos}</div>
    </>
  );
};

export default Feed;
