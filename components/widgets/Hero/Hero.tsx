import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/Hero.module.scss";

type Props = {
children?: ReactNode

}
const Hero = ({children}: Props) => {
  return (
    <>
       <div className={classNames(cl["hero-container"])}></div>
    </>
  );
};

export default Hero;