import Image from "next/image";
import Link from "next/link";

export default function Rightcontent() {
  return (
    <div className="pb-24 md:py-24 pt-18">
      <section className="mb-28">
        <p className="mb-4 text-secondary">
          Hello, I am <strong className="decoration-red-500">RR David</strong>,
          and I am a developer!
        </p>
        <p className="mb-4 text-secondary">
          I really enjoy learning about <strong>React</strong>, and other
          front-end technologies.
        </p>
        <p className="mb-4 text-secondary">
          I also really like{" "}
          <strong className="decoration-yellow-300">cats</strong> and writing music on my guitar.
        </p>
      </section>

      <section
        id="experience"
        className="mb-20 hover:drop-shadow-[0_0px_120px_rgba(0,255,0,.8)] transition-all"
      >
        <h2 className="mb-4 text-4xl font-medium">Experience</h2>
        <a href="https://www.jaladesign.com.au/" target="_blank">
          <div className="flex gap-10 p-3 mb-2 transition-all duration-300 rounded group hover:bg-slate-400 hover:bg-opacity-10 hover:ring-2 hover:ring-green-700">
            <div className="flex-shrink-0 w-1/4 text-xs text-secondary">
              2023 — PRESENT
            </div>
            <div className="transition-all">
              <p className="duration-300 group-hover:text-lime-300">
                Jala Design — Junior Web Developer
              </p>
              <p className="text-secondary ">
                Working with a small team using{" "}
                <strong className="decoration-green-500">PHP/WordPress</strong>{" "}
                and{" "}
                <strong className="decoration-green-500">JS (jQuery)</strong> to
                develop websites.
              </p>
            </div>
          </div>
        </a>
        <a href="https://thehandsomedevs.com.au/" target="_blank">
          <div className="flex gap-10 p-3 mb-2 transition-all duration-300 rounded group hover:bg-slate-400 hover:bg-opacity-10 hover:ring-2 hover:ring-green-700">
            <div className="flex-shrink-0 w-1/4 text-xs text-secondary">
              2021 — PRESENT
            </div>
            <div className="transition-all">
              <p className="duration-300 group-hover:text-lime-300">
                The Handsome Devs — Junior Web Developer
              </p>
              <p className="text-secondary">
                Small startup project team to create websites using{" "}
                <strong className="decoration-orange-500">React</strong> with{" "}
                <strong className="decoration-orange-500">GraphQL</strong>.
              </p>
            </div>
          </div>
        </a>
      </section>

      <section
        id="projects"
        className="mb-20 hover:drop-shadow-[0_0px_200px_rgba(0,255,0,.3)] transition-all"
      >
        <h2 className="mb-4 text-4xl font-medium">Projects</h2>
        <Link
          href="https://size-match.vercel.app/"
          target="_blank"
          className="flex gap-10 p-3 mb-2 transition-all duration-300 rounded group hover:bg-slate-400 hover:bg-opacity-10 hover:ring-2 hover:ring-green-700">
          <div className="relative flex-shrink-0 w-1/4 text-xs text-secondary">
            <Image
              alt="sizematch"
              src="/sizematch.png"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover duration-300 rounded-sm ring-white ring-1 group-hover:ring-lime-200"
            />
          </div>
          <div className="transition-all duration-300">
            <p className="duration-300 group-hover:text-lime-300">
              SizeMatch (On-going)
            </p>
            <p className="text-secondary">
              A web application that helps users compare sizes of clothing from different brands to their own size to scale. Built with React, Redux, and Tailwind.
            </p>
          </div>
        </Link>
        <Link
          href="https://prenatalratings.com/"
          target="_blank"
          className="flex gap-10 p-3 mb-2 transition-all duration-300 rounded group hover:bg-slate-400 hover:bg-opacity-10 hover:ring-2 hover:ring-green-700">
          <div className="relative flex-shrink-0 w-1/4 text-xs text-secondary">
            <Image
              alt="prenatal-ratings"
              src="/prenatal.png"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover duration-300 rounded-sm ring-white ring-1 group-hover:ring-lime-200"
            />
          </div>
          <div className="transition-all duration-300">
            <p className="duration-300 group-hover:text-lime-300">
              Prenatal Ratings
            </p>
            <p className="text-secondary">
              Freelanced project for a client. Built with Shopify, created a custom theme and custom app for the client.
            </p>
          </div>
        </Link>
        <Link
          href="https://jellicate.com.au/"
          target="_blank"
          className="flex gap-10 p-3 mb-2 transition-all duration-300 rounded group hover:bg-slate-400 hover:bg-opacity-10 hover:ring-2 hover:ring-green-700">
          <div className="relative flex-shrink-0 w-1/4 text-xs text-secondary">
            <Image
              alt="jellicate"
              src="/jellicate-text.png"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover duration-300 rounded-sm ring-white ring-1 group-hover:ring-lime-200"
            />
          </div>
          <div className="transition-all duration-300">
            <p className="duration-300 group-hover:text-lime-300">
              Jellicate Nailz
            </p>
            <p className="text-secondary">
              PHP/WooCommerce written website for a sole trader. Design was not created by me, but I did the development.
            </p>
          </div>
        </Link>
      </section>

      <section
        id="education"
        className="mb-20 hover:drop-shadow-[0_0px_120px_rgba(0,255,0,.8)] transition-all"
      >
        <h2 className="mb-4 text-4xl font-medium">Education</h2>
        <div className="flex gap-10 p-3 mb-2 transition-all duration-300 rounded group hover:bg-slate-400 hover:bg-opacity-10 hover:ring-2 hover:ring-green-700">
          <div className="flex-shrink-0 w-1/4 text-xs text-secondary">
            2021 — PRESENT
          </div>
          <div className="transition-all duration-300">
            <p className="duration-300 group-hover:text-lime-300">
              Bachelor of Information Technology Major in Computer Science
            </p>
            <p className="text-secondary">
              Queensland University of Technology
            </p>
          </div>
        </div>
        <div className="flex gap-10 p-3 mb-2 transition-all duration-300 rounded group hover:bg-slate-400 hover:bg-opacity-10 hover:ring-2 hover:ring-green-700">
          <div className="flex-shrink-0 w-1/4 text-xs text-secondary">
            2020 — 2020
          </div>
          <div className="transition-all duration-300">
            <p className="duration-300 group-hover:text-lime-300">
              Diploma of Information Technology
            </p>
            <p className="text-secondary">Macquarie University</p>
          </div>
        </div>
        <div className="flex gap-10 p-3 mb-2 transition-all duration-300 rounded group hover:bg-slate-400 hover:bg-opacity-10 hover:ring-2 hover:ring-green-700">
          <div className="flex-shrink-0 w-1/4 text-xs text-secondary">
            2019 — 2020
          </div>
          <div className="transition-all duration-300">
            <p className="duration-300 group-hover:text-lime-300">Highschool</p>
            <p className="text-secondary">St. Leos Catholic College</p>
          </div>
        </div>
        <div className="flex gap-10 p-3 mb-2 transition-all duration-300 rounded group hover:bg-slate-400 hover:bg-opacity-10 hover:ring-2 hover:ring-green-700">
          <div className="flex-shrink-0 w-1/4 text-xs text-secondary">
            2011 — 2018
          </div>
          <div className="transition-all duration-300">
            <p className="duration-300 group-hover:text-lime-300">
              Elementary - Highschool
            </p>
            <p className="text-secondary">Don Bosco Academy Pampanga</p>
          </div>
        </div>
        <div className="flex gap-10 p-3 mb-2 transition-all duration-300 rounded group hover:bg-slate-400 hover:bg-opacity-10 hover:ring-2 hover:ring-green-700">
          <div className="flex-shrink-0 w-1/4 text-xs text-secondary">
            2006 — 2011
          </div>
          <div className="transition-all duration-300">
            <p className="duration-300 group-hover:text-lime-300">Elementary</p>
            <p className="text-secondary">Westfields International School</p>
          </div>
        </div>
      </section>
    </div>
  );
}
