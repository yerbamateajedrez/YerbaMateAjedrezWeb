import { useState, useRef, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "constants/navlinks";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const closeMobileMenu = () => setOpen(false);
  const router = useRouter();
  const wrapperRef = useRef(null);

  function useOutsideClick(ref) {
    useEffect(() => {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          closeMobileMenu();
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideClick(wrapperRef);

  return (
    <nav ref={wrapperRef}>
      <div className="bg-white h-[80px]">
        <div className="max-w-full lg:max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 items-center">
              <Link href="/">
                <a className="text-2xl font-bold ">
                  <figure className="flex items-center shrink-0">
                    <Image
                      src="/logo-sin-frase.png"
                      alt="Yerba mate"
                      width={80}
                      height={80}
                      objectFit="contain"
                    />
                  </figure>
                </a>
              </Link>
            </div>
            <div className="hidden md:flex space-x-12 items-center font-medium text-gray-600">
              {navLinks.map((link, i) => (
                <Link key={i} href={link.path}>
                  <a
                    className={`${
                      router.pathname === link.path &&
                      "text-lime-500 font-semibold"
                    } text-lg transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out`}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
            <span className="md:hidden">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                rounded
                label={"show Menu"}
                color={"#84cc16"}
                size={32}
              />
            </span>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <nav
          id="mobileMenu"
          className="md:hidden bg-white flex flex-col items-center"
        >
          {navLinks.map((link, i) => (
            <Link key={i} href={link.path}>
              <a
                onClick={closeMobileMenu}
                className="py-4 w-full text-center hover:bg-lime-500 hover:text-white"
              >
                {link.name}
              </a>
            </Link>
          ))}
        </nav>
      )}
    </nav>
  );
};

export default Navbar;
