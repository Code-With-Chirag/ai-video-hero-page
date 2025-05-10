
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blur border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gradient">VideoAI</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="#features" className="text-gray-700 hover:text-primary font-medium">
            Features
          </Link>
          <Link to="#testimonials" className="text-gray-700 hover:text-primary font-medium">
            Testimonials
          </Link>
          <Link to="#pricing" className="text-gray-700 hover:text-primary font-medium">
            Pricing
          </Link>
          <Link to="#contact" className="text-gray-700 hover:text-primary font-medium">
            Contact
          </Link>
        </div>
        <Button className="bg-button-gradient hover:opacity-90 transition-opacity">
          Try For Free
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
