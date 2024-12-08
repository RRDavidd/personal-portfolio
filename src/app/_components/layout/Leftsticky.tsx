import Github from "../svgs/Github";
import Linkedin from "../svgs/Linkedin";
import Instagram from "../svgs/Instagram";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Leftsticky() {
  return (
    <div className="top-0 flex flex-col justify-between flex-shrink-0 w-1/2 max-h-screen py-24 md:sticky">
      <div>
        <div className="mb-20">
          <h1 className="font-bold mb-2 hover:scale-110 hover:cursor-pointer duration-500 hover:drop-shadow-[0_0px_120px_rgba(0,255,0,.8)] transition-all">
            Raphael David
          </h1>
          <p className="mb-4 font-normal">Web Developer</p>
          <p
            className="max-w-md font-light text-secondary "
          >
            I enjoy programming and music!
          </p>
        </div>
        <Navbar />
      </div>
      <div className="flex gap-8 md:pt-0 pt-14">
        <figure>
          <a href="https://github.com/RRDavidd" target="_blank">
            <Github
              width={30}
              height={30}
              className="transition-all duration-300 fill-secondary hover:fill-white hover:scale-110"
            />
          </a>
        </figure>
        <figure>
          <a href="https://www.instagram.com/rrdvid/?" target="_blank">
            <Instagram
              width={30}
              height={30}
              className="transition-all duration-300 fill-secondary hover:fill-white hover:scale-110"
            />
          </a>
        </figure>
        <figure>
          <a
            href="https://www.linkedin.com/in/raphael-david-013b49241/"
            target="_blank"
          >
            <Linkedin
              width={30}
              height={30}
              className="transition-all duration-300 fill-secondary hover:fill-white hover:scale-110"
            />
          </a>
        </figure>
      </div>
    </div>
  );
}
