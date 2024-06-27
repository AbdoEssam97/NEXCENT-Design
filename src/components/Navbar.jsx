import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";
import Logo from "../assets/Icon.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const ToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Nav Items
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Services", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonials", path: "testimonials" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header
      className={`  ${
        isSticky
          ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
          : ""
      }`}
    >
      <nav className={`py-4 lg:px-14 px-4 `}>
        <div className="flex justify-between items-center text-base gap-8">
          <a
            className="text-2xl font-semibold flex items-center space-x-3 "
            href=""
          >
            <img className="w-10 inline-block items-center" src={Logo} alt="" />
            <span className="text-[#263238]"> NEXCENT</span>
          </a>
          {/* Nav Items */}

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                spy={true}
                smooth={true}
                offset={-100}
                to={path}
                key={path}
                className="block text-base text-gray900 cursor-pointer hover:text-brandPrimary first:font-medium"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* btn in large screen */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary hover:text-gray900"
            >
              Login
            </a>
            <button
              className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 whitespace-nowrap
            rounded hover:bg-neutralDGrey"
            >
              Sign up
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={ToggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* nav items in mobile */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              spy={true}
              smooth={true}
              offset={-100}
              to={path}
              key={path}
              className="block text-base text-white cursor-pointer hover:text-brandPrimary first:font-medium"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
