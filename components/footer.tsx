import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
} from "react-icons/io5";
import Image from "next/image";

const Footer = () => {
  
  
    return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-4 bg-slate-300 px-10 py-16 rounded-lg my-14">
        <div>
          <h2 className="uppercase text-[#013248] font-semibold text-2xl leading-[2rem] md:text-3xl md:leading-[3rem]">
            Subscribe for
            <br />
            latest trends & offers
          </h2>
        </div>

        <div className="flex items-center space-x-2 ">
          <Input
            type="email"
            placeholder="Email"
            className="h-12 flex-grow focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:ring-transparent"
          />
          <Button type="submit" className="h-11 bg-[#013248]">
            Subscribe
          </Button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-b-2 border-slate-400 pb-6">
        {/* --- */}
        <div className="py-3">
          <p className="font-semibold mb-4">Buying & Selling</p>
          <p className="flex flex-col gap-4">
            <Link href="" className="underline">
              Financing
            </Link>
            <Link href="" className="underline">
              Find a Car
            </Link>
            <Link href="" className="underline">
              Find a Dealer
            </Link>
            <Link href="" className="underline">
              Listings by City
            </Link>
            <Link href="" className="underline">
              Car payement calculators
            </Link>
            <Link href="" className="underline">
              Car Reviews & Ratings
            </Link>
            <Link href="" className="underline">
              Compare Side by Side
            </Link>
            <Link href="" className="underline">
              Fraud Awareness
            </Link>
            <Link href="" className="underline">
              Sell your Car
            </Link>
          </p>
        </div>

        {/* --- */}
        <div className="py-3">
          <p className="font-semibold mb-4">Explore Our Brand</p>
          <p className="flex flex-col gap-4">
            <Link href="" className="underline">
              NewCars
            </Link>
            <Link href="" className="underline">
              DealerRater
            </Link>
          </p>
          <br />
          <p className="font-semibold mb-4">For Dealers</p>
          <p className="flex flex-col gap-4">
            <Link href="" className="underline flex items-center">
              Dealer Login <GoArrowUpRight />
            </Link>
            <Link href="" className="underline flex items-center">
              ShopCozy.com <GoArrowUpRight />
            </Link>
            <Link href="" className="underline flex items-center">
              Claim Your Dealership <GoArrowUpRight />
            </Link>
            <Link href="" className="underline flex items-center">
              DealerRater Certified <GoArrowUpRight />
            </Link>
            <Link href="" className="underline flex items-center">
              Accu-Trade <GoArrowUpRight />
            </Link>
          </p>
        </div>

        {/* --- */}
        <div className="py-3">
          <p className="font-semibold mb-4">About Us</p>
          <p className="flex flex-col gap-4">
            <Link href="" className="underline">
              About ShopCoozy.com
            </Link>
            <Link href="" className="underline">
              Investor Relations
            </Link>
            <Link href="" className="underline">
              Careers
            </Link>
            <Link href="" className="underline flex items-center">
              Licensing & Reprints <GoArrowUpRight />
            </Link>
            <Link href="" className="underline">
              Site Map
            </Link>

            <Link href="" className="underline">
              Accessibility Statement
            </Link>
            <Link href="" className="underline">
              Feedback
            </Link>
          </p>
        </div>

        {/* --- */}
        <div className="py-3">
          <p className="font-semibold mb-4">Our Mobile App</p>

          <div className="flex gap-2">
            <Image
              src="https://beta.cstatic-images.com/medium/in/v2/static/mobile-apps/app-store-badge-us-black-1.png"
              alt="appstore"
              width={130}
              height={130}
            />
            <Image
              src="https://beta.cstatic-images.com/medium/in/v2/static/mobile-apps/google-play-badge-us-1.png"
              alt="googleplay"
              width={130}
              height={130}
            />
          </div>

          <br />

          <p className="font-semibold mb-4">Connect With Us</p>
          <div className="flex gap-6">
            <Link href="">
              <IoLogoYoutube size={30} className="text-[#013248]" />
            </Link>
            <Link href="">
              <IoLogoInstagram size={30} className="text-[#013248]" />
            </Link>
            <Link href="">
              <IoLogoFacebook size={30} className="text-[#013248]" />
            </Link>
            <Link href="">
              <IoLogoPinterest size={30} className="text-[#013248]" />
            </Link>
          </div>
        </div>
      </div>

      <div className="my-6 flex justify-between text-slate-600 text-sm">
        <Link href="" className="underline">
          Terms & conditions of Use
        </Link>
        <Link href="" className="underline">
          Privacy Policy
        </Link>
        <Link href="" className="underline">
          Interest-Based Ads
        </Link>
        <Link href="" className="underline">
          Privacy Rights
        </Link>
        <Link href="" className="underline">
          Do Not Sell My Personal Information
        </Link>
        <Link href="" className="underline">
          Accessibility Statement
        </Link>
        <Link href="" className="underline">
          Ad Choices
        </Link>
      </div>

      <div className="my-8 text-slate-700 text-sm">
        © 2024 ShopCoozy.com. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
