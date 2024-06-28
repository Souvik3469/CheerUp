import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="font-mont text-gray-50 bg-gray-900">
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-50 sm:ml-6 sm:mt-0 mt-4">
          © 2023, CheerUp — All Rights Reserved.
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="/" className="ml-3 text-gray-50">
            Home
          </Link>
          <Link href="/" className="ml-3 text-gray-50">
            Services
          </Link>
          <Link href="/" className="ml-3 text-gray-50">
            Discussions
          </Link>
          <Link href="/" className="ml-3 text-gray-50">
            Consultation
          </Link>
          <Link href="/" className="ml-3 text-gray-50">
            Articles
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
