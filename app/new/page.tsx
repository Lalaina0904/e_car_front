import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <>
            <Nav />
            <main className="container mx-auto my-4">
                <div className="flex gap-1 text-sm font-semibold text-slate-700">
                    <Link href="/" className="underline">
                        Home{" "}
                    </Link>
                    /
                    <Link href="/new" className="underline">
                        News & actualities
                    </Link>
                </div>

                <div className="my-8">
                    <h1 className="text-2xl font-semibold text-slate-800">
                        News & actualities
                    </h1>
                    <p className="text-sm text-slate-700">
                        The latest car news, videos and expert reviews, from
                        Cars.com's independent automotive journalists
                        <br />
                    </p>
                </div>

                <div className="grid grid-cols-4">
                    <div className="col-span-3 mr-10">
                        <h2 className="text-xl font-semibold text-slate-700">
                            Latest news
                        </h2>

                        <div className="relative">
                            <div className="absolute bottom-[50%]">
                                <p
                                    className="text-[6rem] text-slate-400"
                                    aria-hidden="true">
                                    iX2
                                </p>
                                <p className="" aria-hidden="true"></p>
                            </div>

                            <div>
                                <Image
                                    src="/imgs/cosySec.png"
                                    alt="ix2"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>

                        <div>
                            <p>
                                In spite of its sharp styling, the BMW iX2 is
                                more practical than you might think, and it is
                                very good to drive too. Other electric cars have
                                much better range and efficiency, though
                            </p>

                            <br />

                            <p>
                                BMW has really made a mark in the electric car
                                market, and the iX2 is the latest addition to
                                its EV stable. As with the petrol-powered X2,
                                it’s based on the same mechanical package as the
                                iX1 electric SUV, but gets sharper exterior
                                styling that comes a little at the expense of
                                practicality.
                            </p>
                        </div>
                    </div>
                    {/* --- */}
                    <div className="col-span-1">
                        <div>
                            <h2 className="text-xl font-semibold text-slate-700">
                                Featured
                            </h2>

                            <div>
                                <div>
                                    <Image
                                        src="/imgs/featured.png"
                                        alt="featured"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <p className="font-semibold text-sm">
                                    News 2024
                                </p>
                                <p>
                                    Jeep Wagoneer S Up Close: Reimagining the
                                    Trackhawk
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-slate-700">
                                Latest expert reviews
                            </h2>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default page;
