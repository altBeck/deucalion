import { useState, useEffect } from "react";

const Navbar = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText('drkannobeck@gmail.com');
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

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
    <nav className={`px-2 py-4 sm:px-4 sm:py-5 fixed w-full z-20 top-0 left-0 text-sm uppercase font-medium ${isScrolling ? 'see-through' : ''}`}>
      <div className="flex flex-wrap justify-between items-center mx-auto">
         
        <div>
          <p className="ml-4 flex items-center m-0 md:pb-0 space-x-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="font-semibold !text-white">Available for work</span>
          </p>
        </div>


        <div className="md:flex items-center ml-4 hidden">
          <div className="md:mr-6 lg:mr-12">
            <ul className="flex md:space-x-6 lg:space-x-12 !text-white">
              <li>
                <a href="/work">Work</a>
              </li>
              <li>
                <a href="/profile">About</a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1Mib_7O8Xvx5dfPU3F4d_hrO1xNfUgjGj/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume</a>
              </li>
            </ul>
          </div>
          <span
            className={`font-body text-sm uppercase mr-2 cursor-pointer ${isCopied ? 'text-green-500' : 'text-[#D9D9D9]'}`}
            onClick={handleEmailClick}
          >
            {isCopied ? 'Copied!' : 'drkannobeck@gmail.com'}
          </span>
        </div>

      </div> 
    </nav>
  )
}

export default Navbar