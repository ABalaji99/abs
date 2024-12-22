'use client'

import Image from "next/image";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Globe from "@/components/ui/globe";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
   

  return (
    <div>
<Globe
  markers={[
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
  ]}
/>
<Globe
  markers={[
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
  ]}
/>
<Globe
  markers={[
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
  ]}
/>
<Globe
  markers={[
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
  ]}
/>
<Globe
  markers={[
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
  ]}
/>
<Globe
  markers={[
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
  ]}
/>
<Globe
  markers={[
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
  ]}
/>
<Globe
  markers={[
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
  ]}
/>
<Globe
  markers={[
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
  ]}
/>
<Globe
  markers={[
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
  ]}
/>
<Globe
  markers={[
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
  ]}
/>

    </div>
  );
}
