import { Search, ShoppingBag, ShoppingCart, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="w-full flex justify-between border-b bg-white/50 p-4 items-center gap-4">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Logo"
          height={50}
          width={100}
          priority={true}
        />
      </Link>
      <div className="flex items-center gap-4">
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
      <div className="flex items-center gap-3">
        <div className="p-4 bg-stone-100 rounded-full group">
          <Search className="group-hover:text-brand" />
        </div>
        <div className="p-4 bg-stone-100 rounded-full group">
          <Sun className="group-hover:text-brand" />
        </div>
        <div className="p-4 bg-stone-100 rounded-full group">
          <ShoppingBag className="group-hover:text-brand" />
        </div>
      </div>
    </div>
  );
}

export default Header;
