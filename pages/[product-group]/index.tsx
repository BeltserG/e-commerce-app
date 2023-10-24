import { useState, useEffect, useContext, useReducer } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

// import classNames from "classnames";
import cl from "./styles/index.module.scss";

const index = () => {
  const [data, setData] = useState<{id:number, title:string}[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
        console.log(res);
      } catch (e) {
        console.log("Error");
      }
      setIsLoading(false);
    };
    getData();
  }, []);
  return (
    <>
    {isLoading && <div>Loading...</div>}
    {!isLoading && data.map((item) =><div key={item.id}>{item.title}</div>)}
    </>
  );
};

export default index;
