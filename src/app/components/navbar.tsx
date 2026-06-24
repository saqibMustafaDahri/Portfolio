'use client';
import { usePathname } from "next/navigation";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Call from "../Icons/call";
interface NavItem {
  label: string;
  href: string;
}
export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string>('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Press', href: '/press' },
    { label: 'Case Studies', href: '/casestudies' },
    { label: 'About us', href: '/aboutpage' },
    { label: 'Counselor', href: '/counselor' },
  ];
  const pathname = usePathname();

  return (
    <nav className="w-full h-[80px] md:h-[128px] px-4 md:px-8 py-4 md:py-6 flex items-center justify-between relative">
      <Link href="/" className="flex flex-col items-center justify-center gap-1 select-none z-20">
        <div className="flex items-center">
          <Image src="logo.svg" alt="Logo" width={78} height={180} className="w-[50px] md:w-[78px] h-[80px]" />
        </div>
      </Link>

      <div className="md:hidden z-20 flex items-center">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-black focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      <ul className="hidden md:flex items-center gap-8 h-[48px]">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.label} className="relative flex items-center h-full">
              <Link
                href={item.href}
                className={`text-[18px] font-semibold transition-colors duration-200 ${isActive
                  ? "text-primary"
                  : "text-[#5C5E62] hover:text-[#A11B35]"
                  }`}
              >
                {item.label}
              </Link>

              {isActive && (
                <div className="absolute bottom-0 left-[-5px] right-[-5px] h-[2px] bg-primary" />
              )}
            </li>
          );
        })}
      </ul>
      <Link
        href="/contactus"
        className="hidden md:flex items-center gap-2 bg-black text-white font-medium pl-5.5 pr-6 py-4 rounded-full "
      >
        <Call />
        <span className="text-sm tracking-wide text-[16px]">Contact Us</span>
      </Link>

      {isMobileMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white flex flex-col items-center shadow-lg py-6 gap-6 z-10 md:hidden">
          <ul className="flex flex-col items-center gap-4 w-full">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <li key={item.label} className="flex items-center w-full justify-center">
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.label);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-[18px] font-semibold transition-colors duration-200 ${isActive ? 'text-primary' : 'text-[#5C5E62] hover:text-[#A11B35]'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contactus"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 bg-black text-white font-medium px-6 py-3 rounded-full transition-all duration-200"
          >
            <span className="text-sm tracking-wide">Contact Us</span>
          </Link>
        </div>
      )}
    </nav>
  );
}