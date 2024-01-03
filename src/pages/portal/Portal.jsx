import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import left from "../../assets/arrow-left.svg";

import vid1 from "../../assets/video/pc_untltd.mp4";
import demo from "../../assets/video/demo.mp4";

import color from "../../assets/img/pc/dsColor.png";
import typo from "../../assets/img/pc/dsTypography.png";
import portal from "../../assets/img/pc-cover.png";
import students from "../../assets/img/pc/students.png";

const Portal = () => {
  
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
    <main className="flex flex-col bg-off-white-50 text-black">
      <nav className={`px-2 py-4 sm:px-4 sm:py-5 fixed w-full z-20 top-0 left-0 text-sm uppercase font-medium ${isScrolling ? 'see-through' : ''}`}>
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <Link to="/"
            className="p-3 bg-black rounded-full text-white"
          >
            <span className="flex items-center space-x-1">
              <img 
                src={left}
                alt="Left arrow icon"
                width={20}
                height={20}
              />
              <h1 className="text-normal font-semibold">
                Go to Home
              </h1>
            </span>
          </Link>
        </div>
      </nav>

      <div className="mt-[6%] xl:mt-[4%] p-4 hidden md:block">

        <article className="mx-auto container">
        <div className="flex flex-col">
            <h1 className="font-display text-[144px] text-blu-300">portal check</h1>

            <div className="flex space-x-2 text-sm -mt-10">
              <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium">APP DESIGN</p>
              <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium">PRODUCT DESIGN</p>
            </div>

            <div className="flex space-x-[10%] justify-between my-10 mx-auto">
              <div className="gap-y-5 flex-col flex items-stretch w-[80%]">
                <div className="">
                  <h1 className="font-medium text-lg">My Role</h1>
                  <p><span className="font-medium">UXE</span> —  UI & Interaction Design, Userflow optimisation, Visual Design, Prototyping</p>
                </div>
                <div>
                  <h1 className="font-medium text-lg">Team</h1>
                  <p><span className="font-medium text-off-white-300  hover:text-rogue-200">
                    <a href="https://www.linkedin.com/in/prince-disi/" target="_blank" rel="noopener noreferrer">Prince Disi</a></span> — PM</p>
                  <p><span className="font-medium mt-2 text-off-white-300  hover:text-rogue-200"><a href="https://www.linkedin.com/in/kingswill-wariboko-2283821b8/" target="_blank" rel="noopener noreferrer">Kingswill Wariboko</a></span> — SWE</p>
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
                <h1 className="font-medium text-lg">Overview</h1>
                <p>Portal Check is an identity verification platform streamlining student enrollment verification in Nigerian universities, addressing inefficiencies, delays, and potential inaccuracies in the traditional verification process.</p>
                <p className="mt-2">
                I led the design efforts, creating the website, dashboard, design system, and demo page. My work ensures an intuitive and visually appealing user experience, addressing the critical need for efficient academic verification.
                </p>
              </div>

            </div>
          </div>

          <div className="py-4 rounded-3xl sm:py-0">
            <video autoPlay loop>
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          </div>
        </article>

        <div className="py-4 mx-auto container">


        <section>
          <div className="flex flex-col md:flex-row gap-x-10 justify-between pb-6 md:py-12 space-y-6 sm:space-y-0">
            <div className="max-w-lg">
              <h1 className="text-lg font-medium pb-1">Problem Statement</h1>
              <p className="font-body">In the context of student enrollment verification in Nigerian universities, the existing process is marred by inefficiencies, manual paperwork, and the potential for inaccurate or fraudulent academic credentials. This leads to delays, administrative burdens, and risks in verification. 
              </p>  
              <p className="font-body mt-1">
                Portal Check offers a streamlined, technology-driven solution for swift and accurate academic data authentication, benefiting institutions, students, employers, and stakeholders.
              </p>
            </div>
            <div className="max-w-lg">
              <h1 className="text-lg font-medium pb-1">Design System</h1>
              <p className="font-body">I spearheaded the development of Portal Check&apos;s design system, a crucial step. This system ensures a uniform user experience, building trust in our brand. I streamlined development, making it adaptable for future growth. 
              </p>
              
              <p className="font-body mt-1">
              By incorporating accessibility and user-centric design, it became a versatile and collaborative tool. I carefully defined guidelines for typography, color schemes, and UI elements, offering a structured framework for scalable, user-friendly, and visually appealing design.</p>
            </div>
          </div>

          <div>
            <img className="rounded-3xl" src={color} alt="portal check colors" />
            <div className="py-2"/>
            <img className="rounded-3xl" src={typo} alt="portal check typography" />
            
          </div>
        </section>

        <div>
          <div className="flex flex-col md:flex-row justify-between py-6 md:py-12">
            <h1 className="text-lg font-medium pb-1">Homepage</h1>
            <div>
              <p className="font-body pb-4 max-w-xl">Portal Check&apos;s homepage design brilliantly communicates its value with a clean, intuitive layout. Key features and calls-to-action are strategically placed, guiding users seamlessly. The professional color scheme and imagery inspire trust and confidence. Overall, the design invites exploration.</p>
              <button className="bg-[#0053D6] text-white font-semibold px-5 py-3 rounded-full"><a href="https://portal-check.vercel.app" target="_blank" rel="noopener noreferrer">Live site</a></button>
            </div>
          </div>
          <img className="rounded-3xl w-full soft-shadow" src={portal} alt="Portal Check Website"/>
        </div>

        <div className="flex flex-col md:flex-row justify-between py-6 md:py-12">
          <h1 className="text-lg font-medium pb-1">Portal Check Demo</h1>

          <div>
            <p className="font-body pb-4 max-w-xl">Portal Check&apos;s demo page provides a hands-on, user-friendly introduction to the platform&apos;s key features. It offers a practical experience, showcasing how Portal Check addresses specific needs and serves as a powerful marketing tool. Additionally, it serves as an educational resource, guiding users on effective navigation and utilization of Portal Check.
            </p>  

            <div className="flex space-x-4">
              <button className="bg-[#0053D6] text-white font-semibold px-5 py-3 rounded-full">
                <a href="https://www.figma.com/proto/87krT8M5VFyXar0TF6Yt4P/Portal-Check?type=design&node-id=1415-1295&t=ShJPuyPjU6l4QUrT-0&scaling=min-zoom&page-id=627%3A90&starting-point-node-id=1415%3A1295" target="_blank" rel="noopener noreferrer">View prototype</a>
              </button>
            </div>
          </div>

          
        </div>

        <video className="rounded-3xl soft-shadow" autoPlay loop>
          <source src={demo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div>
          <div className="flex flex-col md:flex-row justify-between py-6 md:py-12">
            <h1 className="text-lg font-medium pb-1">Coming Soon...</h1>
            <p className="font-body pb-4 max-w-xl">
            Here&apos;s a sneak peek of our evolving dashboard, offering a comprehensive view of student data—school, course, current level, institution and more exciting features to come. This powerful tool is designed to assist institutions in streamlining their enrollment verification process, ensuring accuracy and efficiency in managing academic records.
            </p>
          </div>
          <img className="rounded-3xl soft-shadow" src={students} alt="portal check dashboard" />
        </div>


        <div className="flex flex-col md:flex-row justify-between py-6 md:pt-12">
          <h1 className="text-lg font-medium pb-1">Conclusion</h1>
          <p className="font-body max-w-xl">In creating Portal Check, I&apos;ve learned the importance of clear, intuitive user guidance and the significance of showcasing the platform&apos;s standout features. As the project&apos;s demo recently launched, results from the demo&apos;s launch will be shared after a period of assessment and gathering feedback for further refinement. This iterative process ensures that the demo page continues to effectively serve its purpose in providing users with a compelling and informative experience of Portal Check&apos;s capabilities.</p>
        </div>

      </div>


        
      </div>

      <div className="py-12" />
          
      <Link to="/wayaa" className="py-12 bg-blue-700 text-white hidden md:block">
        <div className="container mx-auto">
          <div className="font-display text-[144px]">Next project: Wayaa  
          </div>
        </div>
      </Link>



      {/* MOBILE VIEW */}

      <div className="mt-[6%] xl:mt-[4%] p-4 md:hidden block">

        <article className="mx-auto container">
        <div className="flex flex-col">
            <h1 className="font-display text-[128px] leading-[108px] mb-16 text-blu-300">portal check</h1>

            <div className="flex space-x-2 text-sm -mt-10">
              <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium bg-white">APP DESIGN</p>
              <p className="py-2 px-3 bg-white soft-shadow border rounded-full text-blu-100 font-medium">PRODUCT DESIGN</p>
            </div>

            <div className="flex flex-col  justify-between my-10 mx-auto">
              <div className="gap-y-5 mb-5 flex-col flex items-stretch">
                <div>
                  <h1 className="font-medium text-lg">My Role</h1>
                  <p><span className="font-medium">UXE</span> —  UI & Interaction Design, Userflow optimisation, Visual Design, Prototyping</p>
                </div>
                <div>
                  <h1 className="font-medium text-lg">Team</h1>
                  <p><span className="font-medium text-off-white-300  hover:text-rogue-200">
                    <a href="https://www.linkedin.com/in/prince-disi/" target="_blank" rel="noopener noreferrer">Prince Disi</a></span> — PM</p>
                  <p><span className="font-medium mt-2 text-off-white-300  hover:text-rogue-200"><a href="https://www.linkedin.com/in/kingswill-wariboko-2283821b8/" target="_blank" rel="noopener noreferrer">Kingswill Wariboko</a></span> — SWE</p>
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

              <div className=" flex-col flex items-stretch">
                <h1 className="font-medium text-lg">Overview</h1>
                <p>Portal Check is an identity verification platform streamlining student enrollment verification in Nigerian universities, addressing inefficiencies, delays, and potential inaccuracies in the traditional verification process.</p>
                <p className="mt-2">
                I led the design efforts, creating the website, dashboard, design system, and demo page. My work ensures an intuitive and visually appealing user experience, addressing the critical need for efficient academic verification.
                </p>
              </div>

            </div>
          </div>

          <div className="rounded-xl py-4 sm:py-0">
            <video autoPlay loop muted>
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          </div>
        </article>

        <div className="py-4 mx-auto container">


        <section>
          <div className="flex flex-col md:flex-row gap-x-10 justify-between pb-6 md:py-12 space-y-6 sm:space-y-0">
            <div className="max-w-lg">
              <h1 className="text-lg font-medium pb-1">Problem Statement</h1>
              <p className="font-body">In the context of student enrollment verification in Nigerian universities, the existing process is marred by inefficiencies, manual paperwork, and the potential for inaccurate or fraudulent academic credentials. This leads to delays, administrative burdens, and risks in verification. 
              </p>  
              <p className="font-body mt-1">
                Portal Check offers a streamlined, technology-driven solution for swift and accurate academic data authentication, benefiting institutions, students, employers, and stakeholders.
              </p>
            </div>
            <div className="max-w-lg">
              <h1 className="text-lg font-medium pb-1">Design System</h1>
              <p className="font-body">I spearheaded the development of Portal Check&apos;s design system, a crucial step. This system ensures a uniform user experience, building trust in our brand. I streamlined development, making it adaptable for future growth. 
              </p>
              
              <p className="font-body mt-1">
              By incorporating accessibility and user-centric design, it became a versatile and collaborative tool. I carefully defined guidelines for typography, color schemes, and UI elements, offering a structured framework for scalable, user-friendly, and visually appealing design.</p>
            </div>
          </div>

          <div>
            <img className="rounded-xl" src={color} alt="portal check colors" />
            <div className="py-2"/>
            <img className="rounded-xl" src={typo} alt="portal check typography" />
            
          </div>
        </section>

        <div>
          <div className="flex flex-col md:flex-row justify-between py-6 md:py-12">
            <h1 className="text-lg font-medium pb-1">Homepage</h1>
            <div>
              <p className="font-body pb-4 max-w-xl">Portal Check&apos;s homepage design brilliantly communicates its value with a clean, intuitive layout. Key features and calls-to-action are strategically placed, guiding users seamlessly. The professional color scheme and imagery inspire trust and confidence. Overall, the design invites exploration.</p>
              <button className="bg-[#0053D6] text-white font-semibold px-5 py-3 rounded-full"><a href="https://portal-check.vercel.app" target="_blank" rel="noopener noreferrer">Live site</a></button>
            </div>
          </div>
          <img className="rounded-xl soft-shadow" src={portal} alt="Portal Check Website"/>
        </div>

        <div className="flex flex-col md:flex-row justify-between py-6 md:py-12">
          <h1 className="text-lg font-medium pb-1">Portal Check Demo</h1>

          <div>
            <p className="font-body pb-4 max-w-xl">Portal Check&apos;s demo page provides a hands-on, user-friendly introduction to the platform&apos;s key features. It offers a practical experience, showcasing how Portal Check addresses specific needs and serves as a powerful marketing tool. Additionally, it serves as an educational resource, guiding users on effective navigation and utilization of Portal Check.
            </p>  

            <div className="flex space-x-4">
              <button className="bg-[#0053D6] text-white font-semibold px-5 py-3 rounded-full">
                <a href="https://www.figma.com/proto/87krT8M5VFyXar0TF6Yt4P/Portal-Check?type=design&node-id=1415-1295&t=ShJPuyPjU6l4QUrT-0&scaling=min-zoom&page-id=627%3A90&starting-point-node-id=1415%3A1295" target="_blank" rel="noopener noreferrer">View prototype</a>
              </button>
            </div>
          </div>

          
        </div>

        <video className="rounded-xl soft-shadow" autoPlay loop muted>
          <source className="container" src={demo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div>
          <div className="flex flex-col md:flex-row justify-between py-6 md:py-12">
            <h1 className="text-lg font-medium pb-1">Coming Soon...</h1>
            <p className="font-body pb-4 max-w-xl">
            Here&apos;s a sneak peek of our evolving dashboard, offering a comprehensive view of student data—school, course, current level, institution and more exciting features to come. This powerful tool is designed to assist institutions in streamlining their enrollment verification process, ensuring accuracy and efficiency in managing academic records.
            </p>
          </div>
          <img className="rounded-xl soft-shadow" src={students} alt="portal check dashboard" />
        </div>


        <div className="flex flex-col md:flex-row justify-between py-6 md:pt-12">
          <h1 className="text-lg font-medium pb-1">Conclusion</h1>
          <p className="font-body max-w-xl">In creating Portal Check, I&apos;ve learned the importance of clear, intuitive user guidance and the significance of showcasing the platform&apos;s standout features. As the project&apos;s demo recently launched, results from the demo&apos;s launch will be shared after a period of assessment and gathering feedback for further refinement. This iterative process ensures that the demo page continues to effectively serve its purpose in providing users with a compelling and informative experience of Portal Check&apos;s capabilities.</p>
        </div>

      </div>



        
      </div>
      <div className="py-4" />
          
      <Link to="/wayaa" className="py-12 bg-blue-700 text-white md:hidden block">
        <div className="container mx-auto">
          <div className="font-display text-[50px] p-4">Next project: Wayaa  
          </div>
        </div>
      </Link>
    </main>
  )
}

export default Portal