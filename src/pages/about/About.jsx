import hero from "../../assets/img/about/hero.png";
import img1 from "../../assets/img/about/img1.png";
import img2 from "../../assets/img/about/img2.png";
import img3 from "../../assets/img/about/img3.png";
import img4 from "../../assets/img/about/img4.png";
import img5 from "../../assets/img/about/img5.png";
import img6 from "../../assets/img/about/img6.png";

import { Navbar } from "../../components";

const About = () => {
  const images = [ img1, img2, img3, img4, img5, img6  ];

  return (

    <main className="relative h-screen w-screen bg-white text-black">
      <Navbar />
    </main>
  )
}

export default About