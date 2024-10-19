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
import Logo from "../../assets/Images/AgriMarine.png";
import Container from "./Container";

const navListMenuItems = [
  {
    title: "Realtime Data Analysis",
    path: "/realtime",
  },
  {
    title: "Protecting Hilsa",
    path: "/Protecting Hilsa",
  },
  {
    title: "Maximizing Crop Yields ",
    path: "/Maximizing Crop Yields",
  },
];

export function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ title, path }, key) => (
    <NavLink to={path} key={key} className="block">
      {/* @ts-ignore */}
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div>
          {/* @ts-ignore */}
          <Typography
            variant="h6"
            color="black"
            className="flex p-1 text-[#262B30] opacity-85 hover:opacity-100 justify-center mx-20 items-center text-sm font-bold"
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
              className="flex justify-center items-center gap-2 mt-[0px] py-2 lg:pr-4 pr-0 font-bold text-[#262B30] opacity-85 hover:opacity-100 text-[16px] hover:transition-all duration-300"
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
        <ListItem className="flex justify-center items-center font-bold text-[#262B30] hover:opacity-100 opacity-85 hover:transition-all duration-300  gap-2 py-2 lg:pr-4 pr-5">
          Home
        </ListItem>
      </NavLink>
      <NavListMenu />
      <NavLink to="/contact" className="font-medium">
        {/* @ts-ignore */}
        <ListItem className="flex text-[#262B30] hover:opacity-100 opacity-80 justify-center  hover:transition-all duration-300 font-bold items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </NavLink>
      <NavLink to="/about" className="font-medium">
        {/* @ts-ignore */}
        <ListItem className="flex text-[#262B30] hover:opacity-100 opacity-80  justify-center   hover:transition-all duration-300 font-bold items-center gap-2 py-2 pr-4">
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
    <Navbar className="mx-auto rounded-none bg-white border-none sticky px-4 max-w-full py-0">
      <Container>
        <div className="flex items-center justify-between text-black-gray-900">
          <NavLink to="/" className="flex items-center">
            <img
              src={Logo}
              className="h-20 w-60 hover:scale-110 hover:transition-all hover:duration-300"
              alt="Weather Logo"
            />
          </NavLink>
          <div className="hidden lg:flex items-center">
            <NavList />
          </div>
          <div onClick={() => setOpenNav(!openNav)} className="lg:hidden z-50">
            {openNav ? (
              <XMarkIcon className="h-6 w-6 text-[#262B30]" strokeWidth={3} />
            ) : (
              <Bars3Icon className="h-6 w-6 text-[#262B30]" strokeWidth={3} />
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
