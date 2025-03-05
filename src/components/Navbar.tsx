
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "What we do", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "About us", path: "/about" },
    { name: "Our partners", path: "/partners" },
    { name: "ESG", path: "/esg" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "/careers" }
  ];

  return (
    <div className="fixed top-0 z-40 w-full bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 justify-between items-center">
          <div className="flex">
            <Link to="/" className="flex flex-shrink-0 items-center group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20 
                  }}
                  src="/lovable-uploads/a4b50e25-24f8-4139-a836-10f26a6f4967.png"
                  alt="Sodium Logo"
                  className="h-16 w-auto transform-gpu"
                />
                <div className="absolute inset-0 bg-sodium-secondary opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300" />
              </motion.div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                >
                  <Link
                    to={item.path}
                    className={`group relative inline-flex items-center px-1 pt-1 text-sm font-medium transition-all duration-300 ${
                      isActive ? 'text-sodium-secondary' : 'text-gray-900 hover:text-sodium-secondary'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 -z-10 bg-sodium-secondary/10 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2 }}
                      />
                    )}
                    <div className="absolute inset-0 -z-10 scale-x-0 bg-sodium-secondary/10 rounded-lg transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </Link>
                </motion.div>
              );
            })}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative flex items-center"
            >
              <input
                type="text"
                placeholder="Search..."
                className={`rounded-full bg-gray-100 px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sodium-secondary transform-gpu ${
                  showSearch ? "w-40 opacity-100 translate-x-0" : "w-0 opacity-0 -translate-x-4"
                }`}
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch(!showSearch)}
                className="ml-2 p-2 text-gray-600 hover:text-sodium-secondary transition-colors duration-300"
              >
                <Search className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center md:hidden"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-all duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-sm"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block rounded-md px-3 py-2 text-base font-medium ${
                        isActive 
                          ? 'bg-sodium-secondary/10 text-sodium-secondary'
                          : 'text-gray-900 hover:bg-gray-100'
                      } transition-all duration-300`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="px-3 py-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-full bg-gray-100 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sodium-secondary transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
