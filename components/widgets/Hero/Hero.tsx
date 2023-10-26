import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/Hero.module.scss";

import Arrows from "./components/Arrows/Arrows";
import Feed from "./components/Feed/Feed";
import Dots from "./components/Dots/Dots";

type Props = {
  children?: ReactNode;
};
const Hero = ({ children }: Props) => {
  return (
    <>
      <div className={classNames(cl["hero-container"])}>
        <Feed />
        <Arrows />
        <Dots/>
      </div>
    </>
  );
};

export default Hero;
