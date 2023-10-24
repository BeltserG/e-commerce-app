import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/Footer.module.scss";

type Props = {
children?: ReactNode

}
const Footer = ({children}: Props) => {
  return (
    <>
       <div>Footer</div>
    </>
  );
};

export default Footer;