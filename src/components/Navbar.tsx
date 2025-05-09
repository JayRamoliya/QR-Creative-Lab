
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, QrCode, Download, HelpCircle } from "lucide-react";

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <QrCode className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl text-primary">QR Creative Lab</span>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            <NavLink to="/" isActive={isActive("/")}>
              <Home className="h-4 w-4 mr-2" />
              Home
            </NavLink>
            
            <NavLink to="/customize" isActive={isActive("/customize")}>
              <QrCode className="h-4 w-4 mr-2" />
              Customize
            </NavLink>
            
            <NavLink to="/download" isActive={isActive("/download")}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </NavLink>
            
            <NavLink to="/help" isActive={isActive("/help")}>
              <HelpCircle className="h-4 w-4 mr-2" />
              Help
            </NavLink>
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden flex space-x-4">
            <Link to="/" className={`p-2 rounded-md ${isActive("/") ? "bg-primary/10 text-primary" : "text-gray-600 hover:text-primary"}`}>
              <Home className="h-5 w-5" />
            </Link>
            
            <Link to="/customize" className={`p-2 rounded-md ${isActive("/customize") ? "bg-primary/10 text-primary" : "text-gray-600 hover:text-primary"}`}>
              <QrCode className="h-5 w-5" />
            </Link>
            
            <Link to="/download" className={`p-2 rounded-md ${isActive("/download") ? "bg-primary/10 text-primary" : "text-gray-600 hover:text-primary"}`}>
              <Download className="h-5 w-5" />
            </Link>
            
            <Link to="/help" className={`p-2 rounded-md ${isActive("/help") ? "bg-primary/10 text-primary" : "text-gray-600 hover:text-primary"}`}>
              <HelpCircle className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ 
  to: string; 
  isActive: boolean; 
  children: React.ReactNode;
}> = ({ to, isActive, children }) => {
  return (
    <Link
      to={to}
      className={`
        flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors
        ${isActive 
          ? "bg-primary/10 text-primary" 
          : "text-gray-600 hover:bg-primary/5 hover:text-primary"
        }
      `}
    >
      {children}
    </Link>
  );
};

export default Navbar;
