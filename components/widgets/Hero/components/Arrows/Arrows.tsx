import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/Arrows.module.scss";

type Props = {
  children?: ReactNode;
};
const Arrows = ({ children }: Props) => {
  return (
    <>
      <div className={classNames(cl["arrow"], cl["left"])}>
        <img src="/icons/arrow_back_ios.svg" alt="arrow-left" />
      </div>
      <div className={classNames(cl["arrow"], cl["right"])}>
        <img src="/icons/arrow_forward_ios.svg" alt="arrow-right" />
      </div>
    </>
  );
};

export default Arrows;
