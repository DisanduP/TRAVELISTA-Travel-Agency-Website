import { useState } from 'react';
import { Plane, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Plane className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-2xl text-gray-900">Travelista</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#destinations" className="text-gray-700 hover:text-blue-600 transition-colors">
              Destinations
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#destinations"
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Destinations
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 mt-2">
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
