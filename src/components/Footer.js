import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { LOGO } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-9">
      <div className="lg:px-10">
        <hr className="h-px my-6 lg:mx-auto bg-zinc-600 border-none" />
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-2/5 lg:pr-6 mb-6 lg:mb-0 text-center lg:text-left">
            <div className="pl-4 lg:pl-10">
              <img
                className="w-[10rem] mx-auto lg:mx-0"
                src={LOGO}
                alt="logo"
              />

              <h1 className="text-white">
                Developed By {" "}
                <span className="inline-flex">
                  <a
                    href="https://karthiknarayanan.netlify.app"
                    className="block mt-2 text-sm hover:underline hover:font-bold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Karthik Narayanan
                  </a>
                </span>
              </h1>
              <p className="mt-2 text-sm text-gray-400">
                Connect with me. Find me below!
              </p>

              <div className="flex justify-center lg:justify-start mt-3 -mx-2 text-white text-2xl">
                <a
                  href="https://www.linkedin.com/in/karthiknarayanan26"
                  className="mx-2 hover:opacity-75"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a
                  href="https://github.com/karthik261201"
                  className="mx-2 hover:opacity-75"
                  aria-label="Github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:flex-1 lg:pt-5">
            <div className="grid grid-cols-1 gap-6 text-center md:ml-[7rem] sm:ml-[10rem] lg:ml-0 sm:text-left sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 lg:mt-0">
              <div>
                <h3 className="text-white font-bold uppercase">About</h3>
                <a
                  href="https://karthiknarayanan.netlify.app"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                </a>
                <a
                  href="https://drive.google.com/file/d/1KGKIUvIQdoNP3DI6iXidxDoB-k3bxJAT/view?usp=sharing"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
                <a
                  href="https://karthiknarayanan.netlify.app"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  About Me
                </a>
              </div>

              <div>
                <h3 className="text-white font-bold uppercase">Projects</h3>
                <a
                  href="https://github.com/karthik261201/Food-Ordering-App"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Food Ordering App
                </a>
                <a
                  href="https://github.com/karthik261201/Youtube"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Youtube Clone
                </a>
                <a
                  href="https://github.com/karthik261201/EStore"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  EStore
                </a>
              </div>

              <div>
                <h3 className="text-white font-bold uppercase">Contact</h3>
                <span className="block mt-2 text-sm hover:text-white">
                  +91 8921093944
                </span>
                <span className="block mt-2 text-sm hover:text-white">
                  karthiknarayanan043@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-zinc-600 border-none" />

        <div>
          <p className="text-center text-white text-sm lg:text-base">
            © NetFlixGPT 2024 - All rights reserved |{" "}
            <span className="inline-flex">
              <a
                href="https://karthiknarayanan.netlify.app"
                className="block mt-2 hover:underline hover:font-bold"
                target="_blank"
                rel="noreferrer"
              >
                Karthik Narayanan
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
