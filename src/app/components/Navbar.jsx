import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-base-200 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <a className="text-xl font-bold">NewsNow</a>
          <div className="flex gap-4">
            <Link href = "/" className="btn btn-ghost btn-sm">Home</Link>
            <a className="btn btn-ghost btn-sm">World</a>
            <a className="btn btn-ghost btn-sm">Politics</a>
            <a className="btn btn-ghost btn-sm">Technology</a>
            <a className="btn btn-ghost btn-sm">Contact</a>
            <Link href={"/comments"} className="btn btn-ghost btn-sm">Comments</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
