import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Collapse,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Images/Logo.png";
import Container from "./Container";

const navListMenuItems = [
  {
    title: "Realtime Data Analysis",
    path: "/realtime",
  },
  {
    title: "Flood Affected People",
    path: "/realtime-flood-affected-detection",
  },
];

export function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ title, path }, key) => (
    <NavLink to={path} key={key} className="block">
      {/* @ts-ignore */}
      <MenuItem className="flex items-center gap-3 bg-[#15719f] rounded-lg">
        <div>
          {/* @ts-ignore */}
          <Typography
            variant="h6"
            color="black"
            className="flex p-1 hover:text-gray-900  text-white  justify-center mx-20 items-center text-sm font-bold"
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </NavLink>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          {/* @ts-ignore */}
          <Typography as="div" variant="small" className="font-bold">
            {/* @ts-ignore */}
            <ListItem
              className="flex justify-center items-center gap-2 mt-[0px] py-2 lg:pr-4 pr-0 font-bold text-white text-[16px] hover:text-gray-900 hover:transition-all duration-300"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 font-bold hover:text-gray-900 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 font-bold hover:text-gray-900 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        {/* @ts-ignore */}
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

export function NavList() {
  return (
    //@ts-ignore
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavLink to="/" className="font-medium">
        {/* @ts-ignore */}
        <ListItem className="flex justify-center items-center font-bold hover:text-black hover:transition-all duration-300 text-white gap-2 py-2 lg:pr-4 pr-5">
          Home
        </ListItem>
      </NavLink>
      <NavListMenu />
      <NavLink to="/contact" className="font-medium">
        {/* @ts-ignore */}
        <ListItem className="flex text-white justify-center hover:text-gray-900 hover:transition-all duration-300 font-bold items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </NavLink>
      <NavLink to="/about" className="font-medium">
        {/* @ts-ignore */}
        <ListItem className="flex text-white justify-center hover:text-gray-900  hover:transition-all duration-300 font-bold items-center gap-2 py-2 pr-4">
          About Us
        </ListItem>
      </NavLink>
    </List>
  );
}

export default function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    //@ts-ignore
    <Navbar className="mx-auto rounded-none bg-[#15719f] border-none px-4 max-w-full py-2">
      <Container>
        <div className="flex items-center justify-between text-black-gray-900">
          <NavLink to="/" className="flex items-center">
            <img src={Logo} className="size-12" alt="Weather Logo" />
            <h1 className="text-white ml-2 font-medium text-xl sm:text-2xl">
              <span className="text-white font-semibold">W</span>
              eather Analysis
            </h1>
          </NavLink>
          <div className="hidden lg:flex items-center">
            <NavList />
          </div>
          <div onClick={() => setOpenNav(!openNav)} className="lg:hidden z-50">
            {openNav ? (
              <XMarkIcon className="h-6 w-6 text-white" strokeWidth={3} />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" strokeWidth={3} />
            )}
          </div>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Container>
    </Navbar>
  );
}
