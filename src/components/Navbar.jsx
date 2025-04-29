import { Link, useLocation } from "react-router-dom";
import { Home, User, Clock, Mail, MoreHorizontal } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
       <div className="hidden sm:flex mx-0 sm:mx-2 max-w-full  items-end overflow-x-auto h-[70px]">
        <div 
          className="mx-auto flex w-fit gap-1.5 sm:gap-4 bg-gray-50 px-4 dark:bg-neutral-900 items-center pb-2 pt-2 rounded-full"
          role="toolbar"
          aria-label="Application dock">

          <NavItem to="/" icon={Home} label="Home" activePath={location.pathname} />
          <NavItem to="/about" icon={User} label="About" activePath={location.pathname} />
          <NavItem to="/project" icon={CircuitFolder} label="Projects" activePath={location.pathname} />
          <NavItem to="/timeline" icon={Clock} label="Timeline" activePath={location.pathname} />
          <NavItem to="/contact" icon={Mail} label="Contact" activePath={location.pathname} />
          <NavItem to="/more" icon={MoreHorizontal} label="More" activePath={location.pathname} />
        </div>
      </div>

      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-gray-50 dark:bg-neutral-900 shadow-lg p-2 flex justify-around items-center rounded-t-xl">
        <NavItem to="/" icon={Home} label="Home" activePath={location.pathname} />
        <NavItem to="/about" icon={User} label="About" activePath={location.pathname} />
        <NavItem to="/project" icon={CircuitFolder} label="Projects" activePath={location.pathname} />
        <NavItem to="/timeline" icon={Clock} label="Timeline" activePath={location.pathname} />
        <NavItem to="/contact" icon={Mail} label="Contact" activePath={location.pathname} />
        <NavItem to="/more" icon={MoreHorizontal} label="More" activePath={location.pathname} />
      </div>
    </>
  );
};

const NavItem = ({ to, icon: Icon, label, activePath }) => {
  const isActive = activePath === to;
  return (
    <Link to={to} className="flex flex-col items-center gap-1 relative group">
      <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 scale-0 opacity-0 transition-all 
      duration-200 bg-gray-800 text-white text-xs rounded-md px-2 py-1 group-hover:scale-100 
      group-hover:opacity-100">
        {label}
      </span>
      <div
        className={`relative inline-flex items-center justify-center aspect-square rounded-full
         transition-all duration-200 ${
          isActive ? "bg-gray-100 dark:bg-neutral-800 border border-orange-400" 
          : "bg-gray-200 dark:bg-neutral-800" }`}
        tabIndex="0" role="button" aria-haspopup="true" style={{ width: "40px" }}>
        
        <div
          className={`flex items-center justify-center ${
            isActive ? "text-[#fb923c]" : "text-neutral-900 dark:text-gray-400"
          }`}
          style={{ width: "20px" }}
        >
          <Icon />
        </div>
      </div>
    </Link>
  );
};


const CircuitFolder = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="h-full w-full">
    <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"></path>
    <circle cx="13" cy="12" r="2"></circle>
    <path d="M18 19c-2.8 0-5-2.2-5-5v8"></path>
    <circle cx="20" cy="19" r="2"></circle>
  </svg>
);

export default Navbar;
