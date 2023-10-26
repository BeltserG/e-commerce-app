import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/Promo.module.scss";

type Props = {
children?: ReactNode

}
const Promo = ({children}: Props) => {
  return (
    <>
       <div className={classNames(cl["promo-container"])}>
        <img src="" alt="" />
       </div>
    </>
  );
};

export default Promo;