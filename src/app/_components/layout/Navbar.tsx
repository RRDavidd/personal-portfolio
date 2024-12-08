import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li className="w-full mb-4 group md:w-1/2">
          <Link
            className="flex items-center transition-all duration-300 group-hover:text-lime-300"
            href="/#experience"
          >
            <hr className="inline-block w-8 mr-3 transition-all duration-300 border-secondary group-hover:w-20 group-hover:border-emerald-600" />
            <p className="inline-block">Experience</p>
          </Link>
        </li>
        <li className="w-full mb-4 group md:w-1/2">
          <Link
            className="flex items-center transition-all duration-300 group-hover:text-lime-300"
            href="/#projects"
          >
            <hr className="inline-block w-8 mr-3 transition-all duration-300 border-secondary group-hover:w-20 group-hover:border-emerald-600" />
            <p className="inline-block">Projects</p>
          </Link>
        </li>
        <li className="w-full mb-4 group md:w-1/2">
          <Link
            className="flex items-center transition-all duration-300 group-hover:text-lime-300"
            href="/#education"
          >
            <hr className="inline-block w-8 mr-3 transition-all duration-300 border-secondary group-hover:w-20 group-hover:border-emerald-600" />
            <p className="inline-block">Education</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
