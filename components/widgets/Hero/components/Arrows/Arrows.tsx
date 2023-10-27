import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import cl from "./styles/Arrows.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { moveBackward, moveForward } from "@/store/slices/promoCarouselSlice";

type Props = {
  children?: ReactNode;
};
const Arrows = ({ children }: Props) => {
  const carouselLength = useSelector((state: RootState ) => state.promoCarousel.length);
  const current = useSelector((state: RootState ) => state.promoCarousel.current);
  const dispatch = useDispatch();

  function handleWorksAdjustment(action: string) {
    let overflow = carouselLength - current;
    if (action === "+" && overflow > 0) {
      dispatch(moveForward());
    } else if (action === "-" && current > 1) {
      dispatch(moveBackward());
    }
  }
  return (
    <>
      <div onClick={()=>handleWorksAdjustment("-")} className={classNames(cl["arrow"], cl["left"])}>
        <img src="/icons/arrow_back_ios.svg" alt="arrow-left" />
      </div>
      <div onClick={()=>handleWorksAdjustment("+")} className={classNames(cl["arrow"], cl["right"])}>
        <img src="/icons/arrow_forward_ios.svg" alt="arrow-right" />
      </div>
    </>
  );
};

export default Arrows;
