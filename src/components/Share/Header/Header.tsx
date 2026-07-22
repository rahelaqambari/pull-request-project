import { Menu, Search, ShoppingBag, ShoppingCart, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";

function Header() {
  return (
    <div className="w-full sticky top-0 left-0 flex justify-between border-b bg-white/50 p-4 items-center gap-4">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Logo"
          height={50}
          width={100}
          priority={true}
        />
      </Link>
      <div className="md:flex hidden items-center gap-4">
        <Link className="uppercase hover:text-brand" href="/">
          Home
        </Link>
        <Link className="uppercase hover:text-brand" href="/about">
          About
        </Link>
        <Link className="uppercase hover:text-brand" href="/services">
          Services
        </Link>
        <Link className="uppercase hover:text-brand" href="/shop">
          Shop
        </Link>
        <Link className="uppercase hover:text-brand" href="/blog">
          Blog
        </Link>
        <Link className="uppercase hover:text-brand" href="/contact">
          Contact
        </Link>
      </div>
      <div className="md:flex hidden items-center gap-3">
        <div className="p-4 bg-stone-100 rounded-full group">
          <Search size={20} className="group-hover:text-brand" />
        </div>
        <div>
          <Theme />
        </div>
        <div className="p-4 bg-stone-100 rounded-full group">
          <ShoppingBag size={20} className="group-hover:text-brand" />
        </div>
      </div>
      {/* small screen header */}

      <div className="md:hidden">
        <Menu size={24} />
      </div>
    </div>
  );
}

export default Header;
