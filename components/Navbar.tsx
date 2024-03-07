"use client"
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [stickyNav, setStickyNav] = useState(false);

    const handleScroll = () => {
        window.pageYOffset >= 10 ? setStickyNav(true) : setStickyNav(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.addEventListener("scroll", handleScroll);
    });

    const navbar = [
        { name: "AI Services", slug: "/#ai_services" },
        { name: "Our Doctors", slug: "/#our_doctors" },
        { name: "About Us", slug: "/#about" },
        { name: "Contact Us", slug: "/#contact" },
    ];
    return (
        <header className="">
            <nav className={`${stickyNav ? "active" : ""} bg-green-200   flex flex-wrap items-center justify-between w-full py-2  md:py-1 px-4 text-lg text-gray-700  z-10`}>
                <div data-aos="fade-right" data-aos-delay="100">
                    <a href="#" className="flex justify-center items-center gap-2">

                        <div className="w-32 sm:w-40">
                            <Image
                                src="/logo.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }} // optional
                                alt="Image"
                            />
                        </div>

                    </a>
                </div>

                <MenuIcon className="h-6 w-6 cursor-pointer lg:hidden block" onClick={() => setNav(!nav)} />

                <div className={`${nav ? "" : "hidden"} w-full lg:flex md:items-center md:w-auto  z-10`} id="menu">
                    <ul
                        className="pt-2 text-lg text-gray-700 md:flex md:justify-between md:pt-0">
                        {navbar.map((item, i) => (
                            <li key={item.name} data-aos="fade-left" data-aos-delay={(i + 1) * 100}>
                                <a href={item.slug} className="md:p-4 py-2 block hover:text-purple-400" onClick={() => setNav(false)}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`${nav ? "" : "hidden"} w-full lg:flex items-center md:w-auto z-10`} id="menu">
                    <a href="#!" data-aos="fade-left" data-aos-delay={100} className="px-4 py-2  rounded-full block  bg-green-500 hover:bg-green-600 text-gray-100">
                        {"Sign Up"}
                    </a>

                </div>
            </nav>
        </header>
    )
}

export default Navbar;