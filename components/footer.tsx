import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-4 bg-slate-300 px-10 py-10 rounded-lg">
                <div>
                    <h2 className="uppercase text-slate-700 font-semibold text-3xl leading-[3rem]">
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
                    <Button type="submit" className="h-11">
                        Subscribe
                    </Button>
                </div>
            </div>

            <div>
                <div>
                    <p>
                        <Link href="">Financing</Link>
                        <Link href="">Find a Car</Link>
                        <Link href="">Find a Dealer</Link>
                        <Link href="">Listings by City</Link>
                        <Link href="">Car payement calculators</Link>
                        <Link href="">Car Reviews & Ratings</Link>
                        <Link href="">Sell your Car</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
