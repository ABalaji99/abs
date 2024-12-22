'use client'

import Image from "next/image";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
   

  return (
    <div>
      Ho
    </div>
  );
}
