import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbFileCv } from "react-icons/tb";

export default function Header() {
  return (
    <header className="bg-neutral-900 p-6 fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-cyan-400 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Nguyễn Đại Dương
          </h1>
          <p className="text-gray-200 text-2xl text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl mt md:mt-2 xl:mt-2">
            Unity Developer
          </p>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-6">
          <a
            href="https://github.com/notocean"
            className="text-cyan-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" />
          </a>
          <a
            href="mailto:nguyendaiduong353@gmail.com"
            className="text-cyan-300 hover:text-white"
            rel="noopener noreferrer"
          >
            <SiGmail className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" />
          </a>
          <a
            href="https://web.facebook.com/NotOcean0305"
            className="text-cyan-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" />
          </a>
          <a
            href="https://drive.google.com/file/d/1iSmZCmmdweFyosutEzQEeyhzOzTedER_/view?usp=sharing"
            className="text-cyan-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbFileCv className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" />
          </a>
        </div>
      </div>
    </header>
  );
}
