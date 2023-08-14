import Github from '@/_components/svgs/Github'
import Instagram from '@/_components/svgs/Instagram'
import Linkedin from '@/_components/svgs/Linkedin'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto">
      <figure className="absolute top-0 -left-52 hover:left-0 transition-all">
        <Image src="/cat1.png" width={300} height={250} className=" " alt="crazy-cat-1" />
        stinker cat1
      </figure>
      <div className="flex justify-between gap-5">
        <div className="flex-shrink-0 top-0 sticky max-h-screen w-1/2 py-24 flex flex-col justify-between">
          <div>
            <div className="mb-20">
                <h1 className="font-bold mb-2 hover:scale-110 hover:cursor-pointer duration-500 hover:drop-shadow-[0_0px_120px_rgba(0,255,0,.8)] transition-all">Raphael David</h1>
              <p className="font-normal mb-4">Junior Web Developer</p>
              <p className="font-light text-secondary">Some guy trying to get on dev stuff.</p>
            </div>
            <nav>
              <ul>
                <li className="mb-2"><Link href="/#experience">Experience</Link></li>
                <li className="mb-2"><Link href="/#education">Education</Link></li>
                <li><Link href="/#projects">Projects</Link></li>
              </ul>
            </nav>
          </div>
          <div className="flex gap-8">
            <figure>
              <a href="https://github.com/RRDavidd" target="_blank">
                <Github width={30} height={30} className="fill-secondary hover:fill-white hover:scale-110 transition-all duration-300"/>
              </a>
            </figure>
            <figure>
              <a href="https://www.instagram.com/rrdvid/?" target="_blank">
                <Instagram width={30} height={30} className="fill-secondary hover:fill-white hover:scale-110 transition-all duration-300"/>
              </a>
            </figure>
            <figure>
              <a href="https://www.linkedin.com/in/raphael-david-013b49241/" target="_blank">
                <Linkedin width={30} height={30} className="fill-secondary hover:fill-white hover:scale-110 transition-all duration-300"/>
              </a>
            </figure>
          </div>
        </div>
        <div className="py-24">
          <section className="mb-28">
            <p className="text-secondary mb-4">
              Hello, I am  <strong className="decoration-red-500">RR David</strong>, and I am a developer!
            </p>
            <p className="text-secondary mb-4">
              I really enjoy learning about <strong>React</strong>, and other front-end technologies.
            </p>
            <p className="text-secondary mb-4">
              I also really like <strong className="decoration-yellow-300">cats</strong> as you can see.
            </p>
          </section>

          <section id="experience" className="mb-20 hover:drop-shadow-[0_0px_120px_rgba(0,255,0,.8)] transition-all">
            <h2 className="text-4xl mb-4 font-medium">Experience</h2>
              <a href="https://www.jaladesign.com.au/" target="_blank">
                <div className="group p-3 hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 transition-all duration-300 rounded flex gap-10 mb-2 hover:ring-2 hover:ring-green-700">
                  <div className="text-secondary flex-shrink-0 w-1/4 text-xs">
                    2023 — PRESENT
                  </div>
                    <div className="transition-all">
                      <p className="group-hover:text-sky-300 duration-300">Jala Design — Junior Web Developer</p>
                      <p className="text-secondary ">Worked with a small team using <strong className="decoration-green-500">PHP/WordPress</strong> and <strong className="decoration-green-500">JS (jQuery)</strong> to develop websites</p>
                  </div>
                </div>
              </a>
              <a href="https://thehandsomedevs.com.au/" target="_blank">
                <div className="group p-3 hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 transition-all duration-300 rounded flex gap-10 mb-2 hover:ring-2 hover:ring-green-700">
                  <div className="text-secondary flex-shrink-0 w-1/4 text-xs">
                    2021 — PRESENT
                  </div>
                    <div className="transition-all">
                      <p className="group-hover:text-sky-300 duration-300">The Handsome Devs — Junior Web Developer</p>
                      <p className="text-secondary">Small startup project team to create websites using <strong className="decoration-orange-500">React</strong> with <strong className="decoration-orange-500">GraphQL</strong> for data queries.</p>
                  </div>
                </div>
              </a>
          </section>

          <section id="education" className="mb-20 hover:drop-shadow-[0_0px_120px_rgba(0,255,0,.8)] transition-all">
            <h2 className="text-4xl mb-4 font-medium">Education</h2>
            <div className="group p-3 hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 transition-all duration-300 rounded flex gap-10 mb-2 hover:ring-2 hover:ring-green-700">
              <div className="text-secondary flex-shrink-0 w-1/4 text-xs">
                2021 — PRESENT
              </div>
              <div className="transition-all duration-300">
                <p className="group-hover:text-sky-300 duration-300">Bachelor of Information Technology Major in Computer Science</p>
                <p className="text-secondary">Queensland University of Technology</p>
              </div>
            </div>
            <div className="group p-3 hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 transition-all duration-300 rounded flex gap-10 mb-2 hover:ring-2 hover:ring-green-700">
              <div className="text-secondary flex-shrink-0 w-1/4 text-xs">
                2020 — 2020
              </div>
              <div className="transition-all duration-300">
                <p className="group-hover:text-sky-300 duration-300">Diploma of Information Technology</p>
                <p className="text-secondary">Macquarie University</p>
              </div>
            </div>
            <div className="group p-3 hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 transition-all duration-300 rounded flex gap-10 mb-2 hover:ring-2 hover:ring-green-700">
              <div className="text-secondary flex-shrink-0 w-1/4 text-xs">
                2019 — 2020
              </div>
              <div className="transition-all duration-300">
                <p className="group-hover:text-sky-300 duration-300">Highschool</p>
                <p className="text-secondary">St. Leos Catholic College</p>
              </div>
            </div>
            <div className="group p-3 hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 transition-all duration-300 rounded flex gap-10 mb-2 hover:ring-2 hover:ring-green-700">
              <div className="text-secondary flex-shrink-0 w-1/4 text-xs">
                2011 — 2018
              </div>
              <div className="transition-all duration-300">
                <p className="group-hover:text-sky-300 duration-300">Elementary - Highschool</p>
                <p className="text-secondary">Don Bosco Academy Pampanga</p>
              </div>
            </div>
            <div className="group p-3 hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 transition-all duration-300 rounded flex gap-10 mb-2 hover:ring-2 hover:ring-green-700">
              <div className="text-secondary flex-shrink-0 w-1/4 text-xs">
                2006 — 2011
              </div>
              <div className="transition-all duration-300">
                <p className="group-hover:text-sky-300 duration-300">Elementary</p>
                <p className="text-secondary">Westfields International School</p>
              </div>
            </div>
          </section>

          <section id="projects" className="mb-20 hover:drop-shadow-[0_0px_200px_rgba(0,255,0,.3)] transition-all">
            <h2 className="text-4xl mb-4 font-medium">Projects</h2>
            <div className="group p-3 hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 transition-all duration-300 rounded flex gap-10 mb-2 hover:ring-2 hover:ring-green-700">
              <div className="text-secondary flex-shrink-0 w-1/4 text-xs relative">
                <Image
                  alt="poopoo"
                  src="/20221127_0001.png"
                  fill={true}
                  className="rounded-sm ring-white ring-1 group-hover:ring-lime-200 duration-300"
                  />
              </div>
              <div className="transition-all duration-300">
                <p className="group-hover:text-sky-300 duration-300">Bachelor of Information Technology Major in Computer Science</p>
                <p className="text-secondary">Queensland University of Technology</p>
              </div>
            </div>
            <div className="group p-3 hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 transition-all duration-300 rounded flex gap-10 mb-2 hover:ring-2 hover:ring-green-700">
              <div className="text-secondary flex-shrink-0 w-1/4 text-xs relative">
                <Image
                  alt="poopoo"
                  src="/20221127_0001.png"
                  fill={true}
                  className="rounded-sm ring-white ring-1 group-hover:ring-lime-200 duration-300"
                  />
              </div>
              <div className="transition-all duration-300">
                <p className="group-hover:text-sky-300 duration-300">Bachelor of Information Technology Major in Computer Science</p>
                <p className="text-secondary">Queensland University of Technology</p>
              </div>
            </div>
            <div className="group p-3 hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 transition-all duration-300 rounded flex gap-10 mb-2 hover:ring-2 hover:ring-green-700">
              <div className="text-secondary flex-shrink-0 w-1/4 text-xs relative">
                <Image
                  alt="poopoo"
                  src="/20221127_0001.png"
                  fill={true}
                  className="rounded-sm ring-white ring-1 group-hover:ring-lime-200 duration-300"
                  />
              </div>
              <div className="transition-all duration-300">
                <p className="group-hover:text-sky-300 duration-300">Bachelor of Information Technology Major in Computer Science</p>
                <p className="text-secondary">Queensland University of Technology</p>
              </div>
            </div>
            <div className="group p-3 hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 transition-all duration-300 rounded flex gap-10 mb-2 hover:ring-2 hover:ring-green-700">
              <div className="text-secondary flex-shrink-0 w-1/4 text-xs relative">
                <Image
                  alt="poopoo"
                  src="/20221127_0001.png"
                  fill={true}
                  className="rounded-sm ring-white ring-1 group-hover:ring-lime-200 duration-300"
                  />
              </div>
              <div className="transition-all duration-300">
                <p className="group-hover:text-sky-300 duration-300">Bachelor of Information Technology Major in Computer Science</p>
                <p className="text-secondary">Queensland University of Technology</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
