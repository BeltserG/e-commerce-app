import {
  useState,
  useEffect,
  useContext,
  useReducer,
  PropsWithChildren,
  ReactNode,
} from "react";
import Header from "../../widgets/shared/Header/Header";
import Footer from "../../widgets/shared/Footer/Footer";
import { useRouter } from "next/router";

type Props = {
  children?: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const { route } = useRouter();

  return (
    <>
      {route !== "/_error" && <Header />}
      <main>{children}</main>
      {route !== "/_error" && <Footer />}
    </>
  );
};

export default MainLayout;
