import { Link } from "react-router-dom";
import { Navbar, Status } from "../../components";

import link from "../../assets/external-link.svg";
import preview from "../../assets/preview.png";
import mobile from "../../assets/mobilePreview.png";
import och from "../../assets/och-logo.svg";
import brz from "../../assets/breeze-logo.svg"
import pc from "../../assets/pc-logo.svg";

import coverOne from "../../assets/img/pc-cover.png";
import wayaa from "../../assets/img/wayaa-cover.png"
import agenda from "../../assets/img/agenda-cover.png";
import razr from "../../assets/img/razr-cover.png";
import hoobank from "../../assets/img/hoobank-cover.png";
import poapool from "../../assets/img/poa-preview.png";


const Home = () => {
  return (
    <main className="h-screen flex flex-col bg-gradient-to-b from-regal-100 via-black via-40% md:via-35% lg:via-25% xl:via-50% to-black">
      <div>
        <Navbar />
        
      </div>
      <div className="-z-50">
        <img 
          src={preview}
          alt="Portfolio Preview"
          className="w-full hidden md:block"
        />

        <img 
          src={mobile}
          alt="Portfolio Preview"
          className="w-full block md:hidden"
        />
      </div>

      {/* DESKTOP VIEW */}

      <section className="relative mx-auto hidden md:block pb-12">
        <div className="text-center">
          <div className="font-display mx-auto text-8xl md:-mt-[20%] lg:-mt-[35%] xl:-mt-[60%] 2xl:-mt-[120%] text-white pb-24">
            <h1 className="text-left">beck kanno</h1>
            <h1 className="text-6xl leading-[3rem]">— user interface <br /><span className="-ml-8">designer©</span></h1>
          </div>

          <div className="flex font-display text-xl space-x-4 mx-auto mt-12">
            <p>web/app design</p>
            <p>design system</p>
            <p>product design</p>
            <p>frontend development</p>
            <p>—</p>

            <div className="flex flex-row space-x-4">
              <img 
                src={och}
                alt="OnlineCourseHost.Com logo"
                width={24}
                height={24}
              />

              <img 
                src={brz}
                alt="Breeze logo"
                width={24}
                height={24}
              />

              <img 
                src={pc}
                alt="Portal Check logo"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        <div className="max-w-screen-sm mx-auto bg-white rounded-3xl mt-10 text-black p-4">

          <div className="mx-auto p-[3px] bg-blu-100 rounded-full w-16 m-2"/>

          <article className="p-4">
            <div className="mb-4">
              <p className="font-display text-3xl text-rogue-100">portfolio</p>
            </div>

            {/* PORTFOLIO */}


            {/* NUMBAH 1 */}
            
            <div>
              <Link to="/portal-check">
                <img 
                  src={coverOne}
                  alt="Portal Check Cover Image"
                  className="rounded-lg"
                />
              </Link>

              <div className="mt-4">
                <h1 className="font-display text-4xl">
                  portal check
                </h1>
                <p className="font-body">An identity verification platform, focused on streamlining student enrollment verification in Nigerian universities.</p>
                
                <div className="flex justify-between items-center mt-3">
                  <div className="flex space-x-2 text-sm">
                    <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">DESIGN SYSTEM</p>
                    <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body font-body">PRODUCT DESIGN</p>
                  </div>

                  <Link to="/portal-check">
                    <img 
                      src={link}
                      alt="external link icon"
                    />
                  </Link>

                </div>
              </div>
            </div>


            
            {/* NUMBAH 2 

            <div className="pt-8">
                <Link to="/razr">
                  <img 
                    src={razr}
                    alt="Razr Cover Image"
                    className="rounded-lg"
                  />
                </Link>

                <div className="mt-4">
                  <h1 className="font-display text-4xl">
                    razr
                  </h1>
                  <p className="font-body">A case study of a digital photography website.</p>
                  
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex space-x-2 text-sm">
                      <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">WEB DESIGN</p>
                      <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">CASE STUDY</p>
                    </div>

                    <Link to="/wayaa">
                      <img 
                        src={link}
                        alt="external link icon"
                      />
                    </Link>
                  </div>
                </div>
            </div>

            */}

            {/* NUMBAH 3 */}

            <div className="pt-8">
              <Link to="/wayaa">
                <img 
                  src={wayaa}
                  alt="Wayaa Cover Image"
                  className="rounded-lg"
                />
              </Link>

              <div className="mt-4">
                <h1 className="font-display text-4xl">
                  wayaa
                </h1>
                <p className="font-body">A digital fintech platform that enables people to make payments without a physical card and receive money abroad.</p>
                
                <div className="flex justify-between items-center mt-3">
                  <div className="flex space-x-2 text-sm">
                    <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">APP DESIGN</p>
                    <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">PRODUCT DESIGN</p>
                  </div>

                  <Link to="/wayaa">
                    <img 
                      src={link}
                      alt="external link icon"
                    />
                  </Link>
                </div>
              </div>
      
            </div>


            {/* NUMBAH 4 

            <div className="pt-8">
                <Link to="/agenda">
                  <img 
                    src={agenda}
                    alt="Agenda Cover Image"
                    className="rounded-lg"
                  />
                </Link>

                <div className="mt-4">
                  <h1 className="font-display text-4xl">
                    agenda
                  </h1>
                  <p className="font-body">A social task management app that helps teams manage and organise tasks or projects more effectively.</p>
                  
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex space-x-2 text-sm">
                      <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">APP DESIGN</p>
                      <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">PRODUCT DESIGN</p>
                    </div>

                    <Link to="/agenda">
                      <img 
                        src={link}
                        alt="external link icon"
                      />
                    </Link>
                  </div>
                </div>
            </div>

            */}

                  
            {/* NUMBAH 5 */}

            <div className="pt-8">
              <Link to="https://myhoobank.netlify.app/" target="_blank">
                <img 
                  src={hoobank}
                  alt="Hoobank Cover Image"
                  className="rounded-lg"
                />
              </Link>

              <div className="mt-4">
                <h1 className="font-display text-4xl">
                  hoobank
                </h1>
                <p className="font-body">A landing page for a digital fintech platform, built using ReactJS and TailwindCSS.</p>
                  
                <div className="flex justify-between items-center mt-3">
                  <div className="flex space-x-2 text-sm">
                    <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">WEB DESIGN</p>
                    <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">FRONTEND DEVELOPMENT</p>
                  </div>

                  <Link to="https://myhoobank.netlify.app/" target="_blank">
                    <img 
                      src={link}
                      alt="external link icon"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* NUMBAH 6 */}

            <div className="pt-8">
              <Link to="https://poapool.com/" target="_blank">
                <img 
                  src={poapool}
                  alt="Poapool Cover Image"
                  className="rounded-lg"
                />
              </Link>

              <div className="mt-4">
                <h1 className="font-display text-4xl">
                  poapool
                </h1>
                <p className="font-body">A landing page for a digital fintech platform, built using ReactJS and TailwindCSS.</p>
                  
                <div className="flex justify-between items-center mt-3">
                  <div className="flex space-x-2 text-sm">
                    <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">WEB DESIGN</p>
                    <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">FRONTEND DEVELOPMENT</p>
                  </div>

                  
                </div>
              </div>
            </div>
          </article>
        </div>

        {/*
        
        <div className="fixed left-0 top-0 h-full flex-col items-center justify-center hidden xl:flex">
          <Status />
        </div>
        
        */}

      </section>


      {/* MOBILE VIEW */}

      <section className="md:hidden relative block mx-auto -mt-[100%] p-4">
        <div className="text-center">
          <div className="font-display mx-auto text-5xl text-white">
            <h1 className="text-left">beck kanno</h1>
            <h1 className="leading-[3rem]">— user interface <br /><span className="ml-16">designer©</span></h1>
          </div>

          <div className="font-display text-xl mx-auto mt-12">
            <div className="grid grid-cols-2 gap-4">
              <p>web/app design</p>
              <p>design system</p>
              <p>product design</p>
              <p>frontend development</p>
            </div>

            <div className="flex mx-auto justify-center pt-8 flex-row space-x-4">
              <img 
                src={och}
                alt="OnlineCourseHost.Com logo"
                width={24}
                height={24}
              />

              <img 
                src={brz}
                alt="Breeze logo"
                width={24}
                height={24}
              />

              <img 
                src={pc}
                alt="Portal Check logo"
                width={24}
                height={24}
              />
            </div>
          </div>

          <div className="w-full mx-auto bg-white rounded-xl mt-10 text-black p-4">
            <div className="mx-auto p-[3px] bg-blu-100 rounded-full w-16 mb-4"/>

            <article className="text-left">
              <div className="mb-4">
                <p className="font-display text-3xl text-rogue-100">portfolio</p>
              </div>

              {/* PORTFOLIO */}
              
              <div>
                <Link to="/portal-check">
                  <img 
                    src={coverOne}
                    alt="Portal Check Cover Image"
                    className="rounded-lg"
                  />
                </Link>

                <div className="mt-4 text-left">
                  <h1 className="font-display text-4xl">
                    portal check
                  </h1>
                  <p className="font-body">An identity verification platform, focused on streamlining student enrollment verification in Nigerian universities.</p>
                  
                  <div className="flex justify-between items-center mt-3 mb-3">
                    <div className="flex space-x-2 text-xs">
                      <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">DESIGN SYSTEM</p>
                      <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">PRODUCT DESIGN</p>
                    </div>

                  </div>
                </div>
              </div>
          
            {/* NUMBAH 2 

            <div className="pt-8">
                <Link to="/razr">
                  <img 
                    src={razr}
                    alt="Razr Cover Image"
                    className="rounded-lg"
                  />
                </Link>

                <div className="mt-4">
                  <h1 className="font-display text-4xl">
                    razr
                  </h1>
                  <p className="font-body">A case study of a digital photography website.</p>
                  
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex space-x-2 text-xs">
                      <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">WEB DESIGN</p>
                      <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">CASE STUDY</p>
                    </div>
                  </div>
                </div>
            </div>

            */}


            {/* NUMBAH 3 */}

            <div className="pt-8">
              <Link to="/wayaa">
                <img 
                  src={wayaa}
                  alt="Wayaa Cover Image"
                  className="rounded-lg"
                />
              </Link>

              <div className="mt-4">
                <h1 className="font-display text-4xl">
                  wayaa
                </h1>
                <p className="font-body">A digital fintech platform that enables people to make payments without a physical card and receive money abroad.</p>
                
                <div className="flex justify-between items-center mt-3">
                  <div className="flex space-x-2 text-xs">
                    <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">APP DESIGN</p>
                    <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">PRODUCT DESIGN</p>
                  </div>
                </div>
              </div>
      
            </div>


            {/* NUMBAH 4 

            <div className="pt-8">
                <Link to="/agenda">
                  <img 
                    src={agenda}
                    alt="Agenda Cover Image"
                    className="rounded-lg"
                  />
                </Link>

                <div className="mt-4">
                  <h1 className="font-display text-4xl">
                    agenda
                  </h1>
                  <p className="font-body">A social task management app that helps teams manage and organise tasks or projects more effectively.</p>
                  
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex space-x-2 text-xs">
                      <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">APP DESIGN</p>
                      <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">PRODUCT DESIGN</p>
                    </div>
                  </div>
                </div>
            </div>

            */}
                 
                          
            {/* NUMBAH 5 */}

            <div className="pt-8">
              <Link to="https://myhoobank.netlify.app/" target="_blank">
                <img 
                  src={hoobank}
                  alt="Hoobank Cover Image"
                  className="rounded-lg"
                />
              </Link>

              <div className="mt-4">
                <h1 className="font-display text-4xl">
                  hoobank
                </h1>
                <p className="font-body">A landing page for a digital fintech platform, built using ReactJS and TailwindCSS.</p>
                  
                <div className="flex justify-between items-center mt-3">
                  <div className="flex space-x-2 text-xs">
                    <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">WEB DESIGN</p>
                    <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">FRONTEND DEVELOPMENT</p>
                  </div>
                  
                </div>
              </div>
            </div>


            {/* NUMBAH 6 */}

            <div className="pt-8">
              <Link to="https://poapool.com/" target="_blank">
                <img 
                  src={poapool}
                  alt="Poapool Cover Image"
                  className="rounded-lg"
                />
              </Link>

              <div className="mt-4">
                <h1 className="font-display text-4xl">
                  poapool
                </h1>
                <p className="font-body">A landing page for a digital fintech platform, built using ReactJS and TailwindCSS.</p>
                  
                <div className="flex justify-between items-center mt-3">
                  <div className="flex space-x-2 text-xs">
                    <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">WEB DESIGN</p>
                    <p className="py-2 px-3 soft-shadow border rounded-full text-blu-100 font-medium font-body">FRONTEND DEVELOPMENT</p>
                  </div>

                  
                </div>
              </div>
            </div>

            </article>
          </div>

        </div>
      </section>

      
    </main>
  )
}

export default Home