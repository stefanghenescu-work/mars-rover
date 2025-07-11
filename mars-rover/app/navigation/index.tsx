// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/" className="flex items-center">
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="mr-4"
                />
            </Link>
            <ul className="menu">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/photos">Photos</Link>
                </li>
                <li>
                    <Link href="/puzzle">Puzzle</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
