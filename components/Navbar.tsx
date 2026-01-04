import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem, SectionId } from '../types';

const navItems: NavItem[] = [
  { label: 'Le Club', href: `#${SectionId.ABOUT}` },
  { label: 'Vision', href: `#${SectionId.VISION}` },
  { label: 'Équipes', href: `#${SectionId.TEAMS}` },
  { label: 'Gallerie', href: `#${SectionId.GALLERY}` },
  { label: 'Partenaires', href: `#${SectionId.SPONSORS}` },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-4 md:pt-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className={`relative rounded-3xl transition-all duration-300 ${scrolled
              ? 'bg-white/90 backdrop-blur-md shadow-lg py-2 px-4 md:px-6'
              : 'bg-white py-3 px-4 md:px-8 shadow-md'
            }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center gap-3 group">
                <img
                  src="https://csa-alhilal.dz/img/logo%20elhilal.svg"
                  alt="CSA ALHILAL BBA Logo"
                  className="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-brand-dark hover:text-brand-primary font-medium text-sm transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-full bg-brand-dark text-white font-medium text-sm hover:bg-brand-deep transition-all shadow-lg hover:shadow-brand-deep/20"
              >
                Contact
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-brand-dark hover:text-brand-primary transition-colors p-2"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="px-4 py-6 space-y-4 flex flex-col items-center">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-2 text-brand-dark hover:text-brand-primary font-medium text-lg"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 block w-full text-center px-6 py-3 bg-brand-dark text-white font-medium rounded-full"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};