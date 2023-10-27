import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import cl from "./styles/Feed.module.scss";

import Promo from "./components/Promo/Promo";

import { RootState } from "@/store/store";
import {
  setLength,
  moveBackward,
  moveForward,
  moveHome,
} from "@/store/slices/promoCarouselSlice";

type Props = {
  children?: ReactNode;
};
const Feed = ({ children }: Props) => {
  console.log("Rendered");
  const current = useSelector(
    (state: RootState) => state.promoCarousel.current
  );
  const len = useSelector((state: RootState) => state.promoCarousel.length);
  const dispatch = useDispatch();

  const feedItems = [1, 2, 3,4];
  useEffect(() => {
    dispatch(setLength(feedItems.length));
  }, []);

  const promos = feedItems.map((item, index) => (
    <Promo key={item} current={current} worksCount={index} />
  ));
  return (
    <>
      <div className={classNames(cl["feed-container"])}>{promos}</div>
      <div>{len}</div>
    </>
  );
};

export default Feed;
