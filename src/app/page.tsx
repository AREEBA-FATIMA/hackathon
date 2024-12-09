"use client";
import Head from 'next/head';
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { IoMdSearch } from 'react-icons/io'; // Search Icon
import { FiUser } from 'react-icons/fi'; // User Icon
import { FaCartPlus } from 'react-icons/fa'; // Cart Icon
import { FiHeart } from 'react-icons/fi'; // Heart Icon
import { useState } from 'react'; // Import useState for toggling the menu
import Link from 'next/link';  // Import Link from Next.js

// Import Shadcn components for the dropdown navigation menu
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";  
import Editor from './[home]/editor/page';
import Products from './[home]/products/page';
import Vita from './[home]/vita/page';
import NeuralUniverse from './[home]/neutral/page';
import FeaturedPosts from './[home]/feature/page';
import Footer from './[home]/footer/page';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the hamburger menu
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false); // State for mobile shop dropdown

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle Shop dropdown in mobile view
  const toggleShopDropdown = () => {
    setIsShopDropdownOpen(!isShopDropdownOpen);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Head>
        <title>New Collection</title>
        <meta name="description" content="Summer 2020 Collection" />
      </Head>

      {/* Top bar */}
      <header className="bg-black text-sm font-semibold text-white px-8 p-2 flex justify-between items-center hidden md:flex">
        <div className="flex items-center">
          <span className="mr-10 flex items-center"><FaPhoneAlt className="mr-2" /> (225) 555-0118</span>
          <span className="flex items-center"><FaEnvelope className="mr-2" /> michelle.rivera@example.com</span>
        </div>
        <div>Follow Us and get a chance to win 80% off</div>
        <div className="flex space-x-4 items-center">
          <span>Follow Us:</span>
          <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-300"><FaYoutube /></a>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-white p-4 flex justify-between items-center z-10 relative">
        <div className="flex justify-center items-center space-x-10">
          <div className="text-2xl font-bold mr-10 text-black">Bandage</div>

          {/* Desktop View: Show Navigation Links */}
          <ul className="hidden md:flex font-semibold items-center text-gray-600 space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>

            {/* Shop Dropdown */}
            <li>
              <NavigationMenu>
                <NavigationMenuList className="flex space-x-4">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base">Shop</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink href="/tailor" className="block py-2 px-6 text-xs center">Product</NavigationMenuLink>
                      <NavigationMenuLink href="/pricing" className="block py-2 px-6 text-xs center">Pricing</NavigationMenuLink>
                      <NavigationMenuLink href="/contact" className="block py-2 px-6 text-xs center">Contact</NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>

            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="#" className="hover:underline">Blog</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="#" className="hover:underline">Pages</Link></li>
          </ul>
        </div>

        {/* Mobile Menu - Toggle based on isMenuOpen state */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md z-20 md:hidden">
            <ul className="space-y-4 p-4 text-gray-600 text-center">
              <li><Link href="#" className="hover:underline font-semibold">Home</Link></li>

              {/* Mobile Shop Dropdown */}
              <li className="relative">
                <button 
                  onClick={toggleShopDropdown} 
                  className="flex justify-center w-full text-base hover:underline font-semibold"
                >
                  Shop
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transform ${isShopDropdownOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 011.414 0L10 13.414l3.293-3.707a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isShopDropdownOpen && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li><Link href="/tailor" className="hover:underline">Product</Link></li>
                    <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
                    <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                  </ul>
                )}
              </li>

              <li><Link href="/about" className="hover:underline font-semibold">About</Link></li>
              <li><Link href="#" className="hover:underline font-semibold">Blog</Link></li>
              <li><Link href="/contact" className="hover:underline font-semibold">Contact</Link></li>
              <li><Link href="#" className="hover:underline font-semibold">Pages</Link></li>
            </ul>
          </div>
        )}

        {/* Mobile View: Show Only Last Three Icons */}
        <div className="flex items-center space-x-6">
          {/* User Icon and Login/Register */}
          <div className="hidden lg:flex items-center space-x-2">
            <FiUser className="text-[#45bbed]" />
            <Link href="#" className="hover:underline text-[#45bbed]">Login / Register</Link>
          </div>

          {/* Search Icon in Blue */}
          <div className="text-[#45bbed]">
            <IoMdSearch />
          </div>

          {/* Cart with Number next to it */}
          <div className="flex items-center space-x-1">
            <FaCartPlus className="text-[#45bbed]" />
            <span className="text-[#45bbed]">1</span>
          </div>

          {/* Wishlist Icon for Mobile - Hide on Larger Screens */}
          <div className="hidden md:flex items-center space-x-1">
            <FiHeart className="text-[#45bbed]" />
            <span className="text-[#45bbed]">1</span>
          </div>
          
          {/* Mobile View: Show Hamburger Icon */}
          <div className="md:hidden flex items-center">
            {/* Hamburger Icon */}
            <button onClick={toggleMenu} className="text-[#45bbed]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main
        className="min-h-[100vh] flex-1 flex flex-col justify-center items-start text-white bg-cover bg-center lg:pl-40 p-10 w-full"
        style={{
          backgroundImage: "url('/images/bg.png')", 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-sm font-semibold uppercase">Summer 2020</h2>
        <h1 className="text-5xl font-bold my-8 uppercase">New Collection</h1>
        <p className="mb-6">We know how large objects will act, <br /> but things on a small scale.</p>
        <Link
          href="#"
          className="bg-green-500 font-bold text-white py-2 px-4 rounded uppercase hover:bg-green-600"
        >
          Shop Now
        </Link>
      </main>
      <Editor />
      <Products />
      <Vita />
      <NeuralUniverse />
      <FeaturedPosts />
      <Footer />
    </div>
  );
}
