import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
// import cl from "./styles/Login.module.scss";

type Props = {
children?: ReactNode

}
const Login = ({children}: Props) => {
  return (
    <>
       <div>Login</div>
    </>
  );
};

export default Login;