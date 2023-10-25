import React, { useRef, useState, useEffect, ReactNode } from "react";
import Link from "next/link";

import Hero from "@/components/widgets/Hero/Hero";

type Props = {
  children?: ReactNode;
};

const Home = ({children} : Props) => {

  return (
    <main>
      <Hero/>
    </main>
  );
};

export default Home;
