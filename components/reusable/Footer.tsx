import Link from "next/link";
import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="border-t">
      <div className=" wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width="128"
            height="28"
          />
        </Link>
        <p>2024 Evently. All Rights Reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
