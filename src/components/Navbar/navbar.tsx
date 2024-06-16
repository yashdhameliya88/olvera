import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white text-black py-4 px-lg-6 px-md-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-20 px-sm-0">
        <Link href="/">
          <img
            src="/Images/olveralogo.png"
            alt="Olvera"
            className="h-10 lg:h-10 md:h-10 sm:h-8 xs:h-6 logo"
          />
        </Link>
        <div className="hidden lg:flex md:flex sm:flex xs:flex flex-wrap justify-end">
          <ul className="flex space-x-6">
            <li style={{ fontFamily: 'Montserrat Alternates' }}>
              <Link className="text-[15px] font-bold leading-[11px] tracking-[2px]" href="#home">
                Home
              </Link>
            </li>
            <li style={{ fontFamily: 'Montserrat Alternates' }}>
              <Link className="text-[15px] font-bold leading-[11px] tracking-[2px]" href="#about-us">
                About Us
              </Link>
            </li>
            <li style={{ fontFamily: 'Montserrat Alternates' }}>
              <Link className="text-[15px] font-bold leading-[11px] tracking-[2px]" href="#our-services">
                Our Services
              </Link>
            </li>
            <li style={{ fontFamily: 'Montserrat Alternates' }}>
              <Link className="text-[15px] font-bold leading-[11px] tracking-[2px]" href="#our-experience">
                Our Experience
              </Link>
            </li>
            <li style={{ fontFamily: 'Montserrat Alternates' }}>
              <Link className="text-[15px] font-bold leading-[11px] tracking-[2px]" href="#resources">
                Resources
              </Link>
            </li>
            <li>
              <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full" style={{ fontFamily: 'Oswald' }}>
                CONTACT US
              </button>
            </li>
            <li>
              <Link href="/contact">
                <img
                  className="h-10"
                  src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_black-512.png"
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <img
                  className="h-10"
                  src="https://www.svgrepo.com/show/327370/logo-instagram.svg"
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <img
                  className="h-10"
                  src="https://banner2.cleanpng.com/20180518/yk/kisspng-computer-icons-linkedin-5aff0283a31f04.0344839015266617636682.jpg"
                  alt=""
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden md:hidden sm:hidden xs:block">
          <button className="toggle-button">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;