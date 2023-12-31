import Link from "next/link";

const links = [
  {
    title: "Privacy & Terms.",
    href: "/",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

const icons = [
  {
    icon: "fab fa-facebook-f",
    href: "https://www.facebook.com/",
  },
  {
    icon: "fab fa-twitter",
    href: "https://www.twitter.com/",
  },
  {
    icon: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/",
  },
];

const LinkItem = ({ title, href }) => {
  return (
    <li>
      <Link href={href}>{title}</Link>
    </li>
  );
};

const IconItem = ({ icon, href }) => {
  return (
    <li>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <i className={icon} />
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <div className="bottom-footer lg-pb-20 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 order-lg-0 mt-15">
          </div>
          <div className="col-lg-4 order-lg-1 mt-15">
            <p className="copyright text-center m0">
              Copyright © {new Date().getFullYear()}{" "}
              <a
                style={{ color: "inherit" }}
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                MyCryptoCart.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
