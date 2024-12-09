"use client"

import Link from "next/link";
import { useState } from "react";
import { ArrowRightIcon } from "lucide-react";
import PricingPage from "../price/page";
import PricingFaq from "../faqs/page";
import Footer from "@/app/[home]/footer/page";

export default function Price(){
            const [isMenuOpen, setIsMenuOpen] = useState(false);

            // Function to toggle the mobile menu
            const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
            };

return (
  <div className="min-h-screen bg-gray-50">
        <div className="bg-white">
            {/* Navbar */}
        <nav className="flex justify-between items-center px-6 md:px-20 py-4">
        <h1 className="text-2xl font-bold text-gray-800">Bandage</h1>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-600">
            <Link href="./"><li className="cursor-pointer font-semibold">Home</li></Link>
            <Link href=""><li className="cursor-pointer font-semibold">Product</li></Link>
            <Link href="#"><li className="cursor-pointer font-semibold">Pricing</li></Link>
            <Link href="/contact"><li className="cursor-pointer font-semibold">Contact</li></Link>
        </ul>

        <div className="hidden lg:flex justify-between items-center text-base font-semibold">
            <p className="mr-8 text-[#14a2f5]">Login</p>
            <button className="flex items-center px-6 py-3 bg-[#14a2f5] text-white text-sm rounded-md font-medium w-fit">
            Become a member
            <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
        </div>
        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
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
        </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 w-full px-6 py-4 shadow-lg">
            <ul className="space-y-4 text-gray-600">
            <Link href="./"><li className="cursor-pointer font-semibold">Home</li></Link>
            <Link href=""><li className="cursor-pointer font-semibold">Product</li></Link>
            <Link href="#"><li className="cursor-pointer font-semibold">Pricing</li></Link>
            <Link href="/contact"><li className="cursor-pointer font-semibold">Contact</li></Link>
            </ul>
        </div>
        )}

        {/* Centered Content */}
        <div className="min-h-[50vh] flex item-center flex-col justify-center text-center">
            <h2 className="text-sm text-gray-600">PRICING</h2>
            <h1 className="text-5xl font-bold text-gray-800 mt-6 mb-6">Simple Pricing</h1>
            <p className="text-gray-500 mt-4">Home {'>'} Pricing</p>
        </div>
        </div>
        <PricingPage />
        <PricingFaq />
        <Footer />
    </div>
    )
}