import React from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";

const Faq = () => {
    return (
        <>
            <div className="container mx-auto mt-10">
                <div>
                    <h2 className="font-semibold text-2xl">
                        Used car buying, financing, and warranty FAQ
                    </h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {/* -- item 1 -- */}
                    <AccordionItem value="item-1" className="py-4">
                        <AccordionTrigger className="font-semibold ">
                            Buying
                        </AccordionTrigger>
                        <AccordionContent className="text-[1rem]">
                            <div className="grid md:grid-cols-2 md:space-x-10 border-b border-slate-200 py-6">
                                <div>
                                    <h3 className="mb-4 font-semibold">
                                        How do I buy a car ?
                                    </h3>
                                    <p>
                                        Buying a car involves several steps,
                                        including researching the vehicle,
                                        browsing inventory, obtaining financing,
                                        and negotiating. In order to buy the
                                        right car for you at a reasonable price,
                                        you should first know what type of car
                                        you want and how much you want to spend.
                                        From there, you&apos;ll need to decide which
                                        model fits your budget and preferences,
                                        then browse the inventory for possible
                                        options. After that, it&apos;s recommended to
                                        get financing before visiting the
                                        dealer. Then you need to view the car,
                                        test drive it and negotiate the sale.
                                    </p>
                                </div>

                                <div className="md:py-0 pt-6">
                                    <h3 className="mb-4 font-semibold">
                                        Related articles:
                                    </h3>
                                    <Link href="" className="underline">
                                        <li>Buying Guide: How to Buy a Car</li>
                                    </Link>
                                </div>
                            </div>
                            {/* --- */}
                            <div className="grid md:grid-cols-2 md:space-x-10 border-b border-slate-200 py-6">
                                <div>
                                    <h3 className="mb-4 font-semibold">
                                        What car should I buy ?
                                    </h3>
                                    <p>
                                        Which car is right for you depends on
                                        many factors, including your needs,
                                        lifestyle and budget. After taking the
                                        time to consider these areas, we can
                                        help you determine which model is right
                                        for you.
                                    </p>
                                </div>

                                <div className="md:py-0 pt-6">
                                    <h3 className="mb-4 font-semibold">
                                        Related articles:
                                    </h3>
                                    <Link href="" className="underline">
                                        <li> What car should I buy ?</li>
                                    </Link>
                                </div>
                            </div>
                            {/* --- */}
                            <div className="grid md:grid-cols-2 md:space-x-10 py-6">
                                <div>
                                    <h3 className="mb-4 font-semibold">
                                        What should I look for when buying a
                                        car?
                                    </h3>
                                    <p>
                                        There are some basic inspections and
                                        tests you can do on your used car to
                                        find out if there are certain issues.
                                        Tasks you can perform on your own
                                        include reading the vehicle&apos;s history,
                                        viewing the title, checking for rust or
                                        frame damage, checking fluids, looking
                                        for warning lights on the dashboard,
                                        testing various features, and viewing
                                        maintenance history. It is also
                                        recommended to have a car inspected by a
                                        trusted mechanic before purchasing it.
                                    </p>
                                </div>

                                <div className="md:py-0 pt-6">
                                    <h3 className="mb-4 font-semibold">
                                        Related articles:
                                    </h3>
                                    <Link href="" className="underline">
                                        <li>
                                            What Should a Used-Car Inspection
                                            Include?
                                        </li>
                                    </Link>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* -- item 2 -- */}
                    <AccordionItem value="item-2" className="py-4">
                        <AccordionTrigger className="font-semibold">
                            Financing & leasing
                        </AccordionTrigger>
                        <AccordionContent className="text-[1rem]">
                            <div className="grid md:grid-cols-2 md:space-x-10 border-b border-slate-200 py-6">
                                <div>
                                    <h3 className="mb-4 font-semibold">
                                        Can you lease a used car?
                                    </h3>
                                    <p>
                                        Yes, you can lease a used car, but it is
                                        not as common as leasing a new car. Some
                                        dealerships and leasing companies offer
                                        used car leases, but they are not as
                                        widely available as new car leases. The
                                        terms of a used car lease can vary
                                        depending on the leasing company and the
                                        vehicle.
                                    </p>
                                </div>

                                <div className="md:py-0 pt-6">
                                    <h3 className="mb-4 font-semibold">
                                        Related articles:
                                    </h3>
                                    <Link href="" className="underline">
                                        <li>
                                            Off-Lease Car Glut Might Mean
                                            Used-Car Buyer&apos;s Market
                                        </li>
                                    </Link>
                                </div>
                            </div>
                            {/* --- */}
                            <div className="grid md:grid-cols-2 md:space-x-10 py-6">
                                <div>
                                    <h3 className="mb-4 font-semibold">
                                        How do I finance a used car?
                                    </h3>
                                    <p>
                                        Using the dealership&apos;s lender is
                                        convenient, but it&apos;s best to shop around
                                        at banks and credit unions ahead of time
                                        so you&apos;ll know whose rate is best when
                                        you&apos;re at a dealership. This research
                                        may take a few days but can be well
                                        worth the time.
                                    </p>
                                </div>

                                <div className="md:py-0 pt-6">
                                    <h3 className="mb-4 font-semibold">
                                        Related articles:
                                    </h3>
                                    <Link
                                        href=""
                                        className="underline flex flex-col gap-4">
                                        <li>
                                            Inside the Finance and Insurance
                                            Room
                                        </li>
                                        <li>
                                            Auto Loan Basics for First-Time
                                            Buyers
                                        </li>
                                        <li>What You Need to Get a Car Loan</li>
                                    </Link>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* -- item 3 -- */}
                    <AccordionItem value="item-3" className="py-4">
                        <AccordionTrigger className="font-semibold">
                            Warranty
                        </AccordionTrigger>
                        <AccordionContent className="text-[1rem]">
                            <div className=" border-b border-slate-200 py-6">
                                <h3 className="mb-4 font-semibold">
                                    What is a warranty?
                                </h3>
                                <p>
                                    A warranty is a promise from the
                                    manufacturer or dealer to repair or replace
                                    a product within a specified period of time,
                                    and under certain conditions. The warranty
                                    period is typically one year, but can vary
                                    depending on the manufacturer or dealer.
                                    Warranties are designed to protect consumers
                                    from defects in materials and workmanship,
                                    and are usually included in the purchase
                                    price of the product.
                                </p>
                            </div>

                            <div className="py-6">
                                <h3 className="mb-4 font-semibold">
                                    Are extended warranties worth the money?
                                </h3>
                                <p>
                                    Extended warranties can be worth the money
                                    if they provide coverage for repairs that
                                    would otherwise be expensive. However, it&apos;s
                                    important to read the fine print and
                                    understand what is covered and what is not.
                                    Extended warranties can be expensive, so
                                    it&apos;s important to weigh the cost of the
                                    warranty against the potential cost of
                                    repairs.
                                </p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* -- item 4 -- */}
                    <AccordionItem value="item-4" className="py-4">
                        <AccordionTrigger className="font-semibold">
                            Certified used cars
                        </AccordionTrigger>
                        <AccordionContent className="text-[1rem]">
                            <div className="grid md:grid-cols-2 md:space-x-10 py-6">
                                <div>
                                    <h3 className="mb-4 font-semibold">
                                        What does CPO mean?
                                    </h3>
                                    <p>
                                        A certified pre-owned or CPO car has
                                        been inspected to meet minimum quality
                                        standards and typically includes some
                                        type of warranty. While dealers and
                                        third parties certify cars, the gold
                                        standard is an automaker-certified
                                        vehicle that provides a factory-backed
                                        warranty, often extending the original
                                        coverage. Vehicles must be in excellent
                                        condition and have low miles and wear to
                                        be certified, which is why off-lease
                                        vehicles feed many CPO programs.
                                    </p>
                                </div>

                                <div className="md:py-0 pt-6">
                                    <h3 className="mb-4 font-semibold">
                                        Related articles:
                                    </h3>
                                    <Link
                                        href=""
                                        className="underline flex flex-col gap-4">
                                        <li>Tips to Buying a CPO Car</li>
                                        <li>Certified Pre-Owned</li>
                                    </Link>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
};

export default Faq;
