"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaTh,
  FaList,
  FaAngleRight,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaCartPlus,
} from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FiUser, FiHeart } from "react-icons/fi";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Footer from "../[home]/footer/page";

const ShopSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleShopDropdown = () => {
    setIsShopDropdownOpen(!isShopDropdownOpen);
  };

  const shopImages = [
    "images/shop-1.png",
    "images/shop-2.png",
    "images/shop-3.png",
    "images/shop-4.png",
    "images/shop-5.png",
  ];
  const products = [
    {
      id: 1,
      image: '/images/best-1.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
    {
      id: 2,
      image: '/images/best-2.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
    {
      id: 3,
      image: '/images/best-3.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
    {
      id: 4,
      image: '/images/best-4.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
    {
      id: 5,
      image: '/images/best-5.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
    {
      id: 6,
      image: '/images/best-6.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
    {
      id: 7,
      image: '/images/best-7.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
    {
      id: 8,
      image: '/images/best-8.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
    {
      id: 9,
      image: '/images/best-9.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
    {
      id: 10,
      image: '/images/best-10.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
    {
      id: 11,
      image: '/images/best-11.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
    {
      id: 12,
      image: '/images/best-12.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
  ];
  
  const companies = [
    { name: "Hooli", logo: "/images/comp-1.png" },
    { name: "Lyft", logo: "/images/comp-2.png" },
    { name: "Stripe", logo: "/images/comp-3.png" },
    { name: "AWS", logo: "/images/comp-4.png" },
    { name: "Reddit", logo: "/images/comp-5.png" },
    { name: "GitHub", logo: "/images/comp-6.png" },
  ];

  return (
    <div>
      {/* Top Header */}
      <header className="bg-[#04875b] text-xs text-white px-8 p-2 flex justify-between items-center hidden md:flex">
        <div className="flex items-center">
          <span className="mr-10 flex items-center">
            <FaPhoneAlt className="mr-2" /> (225) 555-0118
          </span>
          <span className="flex items-center">
            <FaEnvelope className="mr-2" /> michelle.rivera@example.com
          </span>
        </div>
        <div className="font-semibold">
          Follow Us and get a chance to win 80% off
        </div>
        <div className="flex space-x-4 items-center">
          <span className="font-semibold">Follow Us:</span>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaYoutube />
          </a>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-white p-4 flex justify-between items-center z-10 relative">
        <div className="flex justify-center items-center space-x-10">
          <div className="text-2xl font-bold mr-10 text-black">Bandage</div>
          <ul className="hidden md:flex font-semibold items-center text-gray-600 space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList className="flex space-x-4">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base">
                      Shop
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink href="/tailor" className="block py-2 px-6 text-xs">
                        Product
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/pricing" className="block py-2 px-6 text-xs">
                        Pricing
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/contact" className="block py-2 px-6 text-xs">
                        Contact
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Pages
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center space-x-2">
            <FiUser className="text-[#45bbed]" />
            <Link href="#" className="hover:underline text-[#45bbed]">
              Login / Register
            </Link>
          </div>
          <div className="text-[#45bbed]">
            <IoMdSearch />
          </div>
          <div className="flex items-center space-x-1">
            <FaCartPlus className="text-[#45bbed]" />
            <span className="text-[#45bbed]">1</span>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <FiHeart className="text-[#45bbed]" />
            <span className="text-[#45bbed]">1</span>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-[#45bbed]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Shop Section */}
      <section className="py-12 px-4 md:px-16 lg:px-24 bg-gray-100">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Shop</h1>
          </div>
          <p className="text-sm text-black mt-1 flex items-center">
            <span>Home</span>
            <FaAngleRight className="mx-2 text-gray-400" />
            <span className="text-gray-400">Shop</span>
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {shopImages.map((image, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center h-52 overflow-hidden shadow-md"
              style={{ backgroundImage: `url('${image}')` }}
            ></div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center border-t pt-4">
          <p className="text-sm text-gray-500">Showing all 12 results</p>
          <div className="flex items-center space-x-2">
            <p className="font-semibold text-sm">Views:</p>
            <button className="p-3 text-xs rounded-md border text-gray-600 hover:bg-gray-300">
              <FaTh />
            </button>
            <button className="p-3 text-xs rounded-md border text-gray-600 hover:bg-gray-300">
              <FaList />
            </button>
          </div>
          <div className="flex space-x-4">
            <select className="py-2 border bg-gray-200 text-center rounded-sm text-gray-600">
              <option value="popularity">Popularity</option>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-high-to-low">Price: High to Low</option>
            </select>
            <button className="py-2 px-5 bg-[#14a2f5] text-white rounded-sm hover:bg-blue-600">
              Filter
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-10 gap-4 md:gap-8">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={company.logo}
                alt={company.name}
                className="lg:mx-4"
                width={80}
                height={30}
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
      {/* Header Section */}
      <div className="text-center my-8">
        <p className="text-gray-500 text-sm mt-2">
          Featured Products
        </p>
        <h1 className="text-2xl font-bold tracking-wide">BESTSELLER PRODUCTS</h1>
        <p className="text-gray-500 text-sm mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-3/4">
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="transition flex flex-col items-center text-center py-4"
              >
                <div className="w-full flex justify-center mb-8">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <h2 className="text-sm font-semibold">{product.title}</h2>
                <p className="text-gray-500 text-xs">{product.department}</p>
                <div className="flex text-xs items-center justify-center mt-2">
                  <span className="text-gray-400 mr-4">${product.price}</span>
                  <span className="text-green-600 font-bold">${product.discountedPrice}</span>
                </div>
                <div className="flex space-x-2 mt-2">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className={`w-3 h-3 rounded-full ${color}`}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center my-10">
            <table className="border-collapse border border-gray-300">
                <thead>
                <tr>
                    <th className="py-4 px-4 border border-gray-300 text-gray-400 bg-gray-100 text-xs font-semibold">First</th>
                    <th className="py-4 px-4 border border-gray-300 text-[#14a2f5] text-sm font-semibold">1</th>
                    <th className="py-4 px-4 border border-gray-300 bg-[#14a2f5] text-white text-sm font-semibold">2</th>
                    <th className="py-4 px-4 border border-gray-300 text-[#14a2f5] text-sm font-semibold">3</th>
                    <th className="py-4 px-4 border border-gray-300 text-[#14a2f5] text-sm font-bold">Next</th>
                </tr>
                </thead>
                <tbody>
                
                </tbody>
            </table>
            </div>

        </div>
      </div>
    </div>
  
  );
};

export default ShopSection;
