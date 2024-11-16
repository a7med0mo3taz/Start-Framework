import React, { useEffect, useState } from 'react'
import "../Navbar/Navbar.css"
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 0);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <>
            <nav className={`navbar navbar-expand-lg fixed w-full transition-all duration-500 ${isScrolled ? "py-0" : "py-4"} top-0 z-50`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="logo-desc self-center text-white font-bold whitespace-nowrap ">START FRAMEWORK</span>
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 text-white md:flex-row md:space-x-8 rtl:space-x-reverse ">
                            <li>
                                <NavLink to={"/about"} className="block md:border-0  md:p-2 ">ABOUT</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/portfolio"} className="block md:border-0 md:text-center  md:p-2 ">PORTFOLIO</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/contact"} className="block md:border-0  md:p-2 ">CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
