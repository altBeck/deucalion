import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import left from "../../assets/arrow-left.svg";
import tinkle from "../../assets/arrow-left-blue.svg";
import img1 from "../../assets/img/wayaa/wayaa-preview.png";

import img2 from "../../assets/img/wayaa/onboarding.png";
import img3 from "../../assets/img/wayaa/get-started.png";
import img4 from "../../assets/img/wayaa/card.png";
import img5 from "../../assets/img/wayaa/transfers.png";
import img6 from "../../assets/img/wayaa/home.png";
import img7 from "../../assets/img/wayaa/random.png";

import img8 from "../../assets/img/agenda/agenda-frame.png";
import img9 from "../../assets/img/agenda/agenda-logo-inverted.svg";

const Wayaa = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="h-full flex flex-col bg-off-white-100 text-black pb-16">
      <nav className={`px-2 py-4 sm:px-4 sm:py-5 fixed w-full z-20 top-0 left-0 text-sm uppercase font-medium ${isScrolling ? 'see-through' : ''}`}>
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <Link to="/">
            <span className="flex items-center space-x-2">
              <img 
                src={left}
                alt="Left arrow icon"
                width={20}
                height={20}
              />
              <h1 className="text-normal">
                Go to Home
              </h1>
            </span>
          </Link>
        </div>
      </nav>

      <div className="mt-[6%] xl:mt-[4%] p-4 hidden md:block">

        <article className="container mx-auto">
          <div className="flex flex-col">
            <h1 className="font-display text-[144px] text-rogue-200">wayaa</h1>

            <div className="flex space-x-2 text-sm -mt-10">
              <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium">APP DESIGN</p>
              <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium">PRODUCT DESIGN</p>
            </div>

            <div className="flex space-x-[10%] justify-between my-10 mx-auto">
              <div className="gap-y-5 flex-col flex items-stretch w-[80%]">
                <div className="">
                  <h1 className="font-medium text-sm">My Role</h1>
                  <p><span className="font-medium">Product Designer</span> —  Interaction Design, Visual Design, Prototyping</p>
                </div>
                <div>
                  <h1 className="font-medium text-sm">Team</h1>
                  <p><span className="font-medium text-off-white-300  hover:text-rogue-200">Bryan Ebeh</span> — SWE</p>
                  <p><span className="font-medium text-off-white-300  hover:text-rogue-200">Tonye Banigo</span> — Brand Designer</p>
                  <p></p>
                  <p></p>
                </div>
                {/*                
                  <div>
                    <h1 className="font-medium text-sm">Timeline</h1>
                    <p className="font-medium">3 months</p>
                  </div>
                */}
              </div>

              <div className=" flex-col flex items-stretch w-[80%]">
                <h1 className="font-medium text-sm">Overview</h1>
                <p>Wayaa aims to provide a user-friendly platform that facilitates secure and swift transactions. With a focus on enhancing regional financial interactions, Wayaa aims to streamline and optimize close regional transactions, catering to the unique needs and challenges of the Western African market.</p>
                <p className="mt-2">
                I led the design efforts, creating a seamless user experience that birthed it&apos;s website, design system, and the mobile app. My role revolves around ensuring an intuitive intuitive navigation, visual appeal, and addressing critical user needs, reinforcing the product&apos;s success in the market.
                </p>
              </div>

            </div>
          </div>
        </article>

        <img 
          src={img1}
          alt="Wayaa Preview image"
          className="container mx-auto"
        />

        <div>
          <p className="text-center w-[70%] py-24 font-semibold mx-auto text-3xl text-[#86868b]">Crafted with precision over the past six months, these visuals embody the culmination of my design efforts. Explore the intuitive interfaces and cohesive design elements that reflect our commitment to an exceptional user experience.</p>
        </div>

        <div className="flex flex-wrap container mx-auto">
          <div className="w-1/2 md:w-1/3 lg:w-1/2 p-4 min-h-0">
            <img 
              src={img2}
              alt="image"
              className="object-cover object-center w-full h-full"
            />
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/2 p-4 min-h-0">
            <img 
              src={img3}
              alt="image"
              className="object-cover object-center w-full h-full"
            />
          </div>

          <div className="w-full md:w-1/3 lg:w-1/2 p-4 min-h-0">
            <img 
              src={img4}
              alt="image"
              className="object-cover object-center w-full h-full"
            />
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/2 p-4 min-h-0">
            <img 
              src={img5}
              alt="image"
              className="object-cover object-center w-full h-full"
            />
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/3 p-4 min-h-0">
            <img 
              src={img6}
              alt="image"
              className="object-cover object-center w-full h-full"
            />
          </div>

          <div className="w-full md:w-1/3 lg:w-[66.666666%] p-4 min-h-0">
            <img 
              src={img7}
              alt="image"
              className="object-cover object-center w-full h-full rounded-[28px]"
            />
          </div>
        </div>

      </div>

      <div>
        <p className="text-center w-[70%] mx-auto p-4 text-[#86868b] text-2xl font-semibold">This project is currently under wraps due to its confidential nature and ongoing status. The full design process is still in the works and isn&apos;t ready for public viewing. I also have a personal preference for sharing these narratives in a more personal setting.</p>

        <div className="pt-48">
          <h1 className="text-center text-2xl font-semibold">Have you had a chance to explore my other projects? <br />👀</h1>

          <div className="pt-16 flex flex-row justify-center space-x-8">
            <div className="w-80 h-80 bg-white rounded-3xl soft-shadow text-center">
              <div className="p-8">
                <img 
                  src={img9}
                  alt="agenda logo"
                  className="mx-auto pb-1"
                />

                <p className="text-2xl font-medium">task management <br />on the go.</p>

                <Link 
                  to="/agenda"
                  className="flex justify-center items-center pt-2"
                >
                  <span className="flex space-x-1">
                    <span className="text-blu-200 text-lg font-semibold">Previous project</span>
                    <img 
                      src={tinkle}
                      alt="blue right arrow"
                    />
                  </span>
                </Link>

                <img 
                  src={img8}
                  alt="Agenda Frame"
                  width={160}
                  className="mt-4 mx-auto"
                />
              </div>
            </div>

            <div className="w-80 h-80 bg-white rounded-3xl soft-shadow text-center">
              <div className="p-8">
                <img 
                  src={img9}
                  alt="agenda logo"
                  className="mx-auto pb-1"
                />

                <p className="text-2xl font-medium">task management <br />on the go.</p>

                <Link 
                  to="/agenda"
                  className="flex justify-center items-center pt-2"
                >
                  <span className="flex space-x-1">
                    <span className="text-blu-200 text-lg font-semibold">Next project</span>
                    <img 
                      src={tinkle}
                      alt="blue right arrow"
                    />
                  </span>
                </Link>

                <img 
                  src={img8}
                  alt="Agenda Frame"
                  width={160}
                  className="mt-4 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


    </main>
  )
}

export default Wayaa