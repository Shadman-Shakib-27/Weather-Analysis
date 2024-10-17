import { ArrowRight } from "lucide-react";
import moment from "moment";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Images/Logo.png";
import Container from "./Container";
const Footer = () => {
  const year = moment().year();
  return (
    <footer className="bg-[#15719f] text-light-gray">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-4 py-8">
          <div>
            <NavLink to="/" className="flex justify-center items-center">
              <img src={Logo} className="size-14" alt="Weather Logo" />
              <h1 className="text-white font-medium text-2xl pl-1">
                <span className="text-white font-semibold">W</span>
                eather Analysis
              </h1>
            </NavLink>
          </div>
          <div>
            <h2 className="text-white  mb-4 text-center lg:text-start font-extrabold border-b">
              Product
            </h2>
            <div className=" flex flex-col justify-center lg:items-start items-center  space-y-3 text-white">
              <NavLink to="/">Pricing</NavLink>
              <NavLink to="/">Overview</NavLink>
              <NavLink to="/">Browse</NavLink>
              <NavLink to="/">Accessibility</NavLink>
            </div>
          </div>
          <div>
            <h2 className="text-white  mb-4 text-center lg:text-start font-extrabold border-b">
              Solutions
            </h2>
            <div className=" flex flex-col justify-center lg:items-start items-center  space-y-3 text-white">
              <NavLink to="/">Brainstorming</NavLink>
              <NavLink to="/">Ideation</NavLink>
              <NavLink to="/">Wireframing</NavLink>
              <NavLink to="/">Research</NavLink>
            </div>
          </div>
          <div>
            <h2 className="text-white mb-4 text-center lg:text-start font-extrabold border-b">
              Resources
            </h2>
            <div className=" flex flex-col justify-center lg:items-start items-center space-y-3 text-white">
              <NavLink to="/">Help Center</NavLink>
              <NavLink to="/">Blog</NavLink>
              <NavLink to="/">Tutorials</NavLink>
              <NavLink to="/">FAQs</NavLink>
            </div>
          </div>
          <div>
            <h2 className="text-white mb-4 text-center lg:text-start font-extrabold border-b">
              Support
            </h2>
            <div className=" flex flex-col justify-center lg:items-start items-center  space-y-3 text-white">
              <NavLink to="/">Contact Us</NavLink>
              <NavLink to="/">Developers</NavLink>
              <NavLink to="/">Documentation</NavLink>
              <NavLink to="/">Integrations</NavLink>
            </div>
          </div>
          <div>
            <h2 className="text-white  mb-4 text-center lg:text-start font-extrabold border-b">
              Company
            </h2>
            <div className=" flex flex-col justify-center lg:items-start items-center  space-y-3 text-white">
              <NavLink to="/">About</NavLink>
              <NavLink to="/">Press</NavLink>
              <NavLink to="/">Events</NavLink>
              <NavLink to="/" className="flex gap-2">
                Request Demo <ArrowRight className="w-4 mt-[2px]" />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col lg:flex-row items-center py-8 text-white border-t-[1px]">
          <p>
            ©{year} - Developed By
            <NavLink to="https://www.linkedin.com/in/shadman27">
              <span className=" hover:text-gray-900 cursor-pointer font-bold">
                {" "}
                Shadman
              </span>
            </NavLink>
          </p>
          <nav className="space-x-5 mt-4 lg:mt-0 xl:mt-0 md:mt-0">
            <NavLink to="/">Terms</NavLink>
            <NavLink to="/">Privacy</NavLink>
            <NavLink to="/">Contact</NavLink>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
