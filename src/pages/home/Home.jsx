import preview from "../../assets/preview.png";
import och from "../../assets/och-logo.svg";
import brz from "../../assets/breeze-logo.svg"
import pc from "../../assets/pc-logo.svg";

import coverOne from "../../assets/img/pc-cover.png";

const Home = () => {
  return (
    <main className="h-screen flex flex-col bg-gradient-to-b from-regal-100 via-black via-40% md:via-35% lg:via-25% xl:via-50% to-black">
      <div className="-z-50">
        <img 
          src={preview}
          alt="Portfolio Preview"
          className="w-full hidden md:block"
        />
      </div>

      <section className="relative mx-auto hidden md:block">
        <div className="text-center">
          <div className="font-display mx-auto text-8xl xl:-mt-[60%] text-white">
            <h1 className="text-left">beck kanno</h1>
            <h1 className="leading-[5rem]">— user interface <br /><span className="ml-16">designer©</span></h1>
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
            <div className="rounded-xl">
              <img 
                src={coverOne}
                alt="Portal Check Cover Image"
                className="rounded-t-xl"
              />
            </div>
          </article>
        </div>

      </section>
    </main>
  )
}

export default Home