import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/SearchBar.module.scss";

type Props = {
  children?: ReactNode;
};
const SearchBar = ({ children }: Props) => {
  return (
    <div className={classNames(cl["search-form-wrapper"])}>
      <form className={classNames(cl["search__form"])}>
        <div className={classNames(cl["search__elements"])}>
          <input type="search" name="search" id="search" />
          <label htmlFor="search">
            <img src="/icons/search.svg" alt="search" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
