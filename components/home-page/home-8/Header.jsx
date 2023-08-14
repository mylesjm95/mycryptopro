import { useEffect, useState } from "react";
import MainMenu from "../../header/MainMenu";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-eleven white-vr ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <h4 className="hero-heading fw-500 text-white">
              <span>MyCryptoCart.io</span>
            </h4>
          </div>
          <div className="right-widget d-flex align-items-center ms-auto ms-lg-0 order-lg-3">
            <Link
              href="#home-contact-form"
              className="start-btn-two fw-500 position-relative d-none d-lg-block"
            >
              Get Started
            </Link>
          </div>
          {/* /.right-widget */}
          {/* <MainMenu /> */}
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default Header;
