"use client";

import React, { useEffect, useState, useRef } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";

import { Phone, User, SearchIcon } from "lucide-react";

import { CgMenuRight, CgClose } from "react-icons/cg";

import { BiCartAdd } from "react-icons/bi";

import { useRouter } from "next/navigation";

const NAV_ITEMS: NavItem[] = [
    {
        title: "Categories",
        path: "/categories",
    },

    {
        title: "Sale",
        path: "/sale",
    },

    {
        title: "what's new",
        path: "/new",
    },
];

type NavItem = {
    title: string;
    path: string;
    submenu?: boolean;
    subMenuItems?: NavItem[];
};

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "./ui/button";

import { Input } from "./ui/input";

const Nav = () => {
    return (
        <>
            <div className="sticky top-0 z-10 w-full">
                {/* --- top bar --- */}
                <div className="bg-[#013248] text-slate-100 font-semibold">
                    <div className="mx-4 flex justify-between">
                        <div className="flex gap-2 items-center px-3">
                            <Phone className="w-4" />
                            <span className="text-[0.75rem] sm:block hidden">
                                +237 01 02 03 04
                            </span>
                        </div>

                        <div className="flex text-md items-center">
                            <Button className="p-0 bg-transparent font-semibold">
                                Get 50% Off on Selected Items
                            </Button>
                        </div>

                        <div className="flex">
                            <Select defaultValue="english">
                                <SelectTrigger className="focus:ring-offset-0 focus:ring-0 border-none bg-transparent text-[0.8rem]">
                                    <SelectValue placeholder="EN" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="english">
                                            EN
                                        </SelectItem>
                                        <SelectItem value="french">
                                            FR
                                        </SelectItem>
                                        <SelectItem value="german">
                                            DE
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Select>
                                <SelectTrigger className="focus:ring-offset-0 focus:ring-0 border-none bg-transparent">
                                    <SelectValue placeholder="Location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="douala">
                                            Madagascar
                                        </SelectItem>
                                        <SelectItem value="yaounde">
                                            France
                                        </SelectItem>
                                        <SelectItem value="bafoussam">
                                            USA
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* --- nav bar --- */}

                <div className="bg-background">
                    <div className="container flex items-center justify-between py-6 nav-bar">
                        <div className="flex">
                            {/* --- lgo --- */}
                            <div className="flex me-8 items-center">
                                <Link
                                    href="/"
                                    className="uppercase font-bold text-[#013248] text-2xl hidden md:block"
                                    id="shopLogo">
                                    Shop ' coozy
                                </Link>

                                <Link
                                    href="/"
                                    className="font-bold text-[#013248] text-xl md:hidden"
                                    id="shopLogo">
                                    SC
                                </Link>
                            </div>
                            {/* --- menu --- */}

                            <div className="hidden lg:flex flex-col">
                                <div className="flex justify-center w-full items-center">
                                    <div className="flex gap-6 text-xs">
                                        {NAV_ITEMS.map((item, idx) => {
                                            return (
                                                <MenuItem
                                                    key={idx}
                                                    item={item}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --- Search bar --- */}

                        <div>
                            <div className="relative w-80">
                                <Input
                                    type="text"
                                    placeholder="Search"
                                    className="pr-12 pl-4 rounded-2xl focus-visible:ring-offset-0 focus-visible:ring-slate-400 focus-visible:ring-1"
                                />
                                <SearchIcon className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 right-3" />
                            </div>
                        </div>

                        <div className="flex items-center text-slate-600 text-[0.9rem] font-semibold">
                            <div className="flex gap-1 items-end md:px-3">
                                <User className="text-2xl" />
                                <span className="hidden lg:block">Account</span>
                            </div>
                            <div className="flex gap-1 items-end md:px-3">
                                <BiCartAdd className="text-2xl" />
                                <span className="hidden lg:block">Cart</span>
                            </div>

                            {/* --- mobile menu --- */}

                            <div className="lg:hidden">
                                <MobileNavigation />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;

const MenuItem = ({ item }: { item: NavItem }) => {
    const pathname = usePathname();

    return (
        <div className="relative">
            <Link
                href={item.path}
                className={`flex flex-row space-x-4 lg:space-x-10 items-center p-2 rounded-lg  item__animate__hover text-slate-800 ${
                    item.path === pathname ? "item__stick" : ""
                } `}>
                <span className="text-[0.95rem] text-slate-600 flex font-semibold hover:text-slate-500">
                    {item.title}
                </span>
            </Link>
        </div>
    );
};

const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navigate = (path: string, target: string = "_self") => {
        if (target === "_blank") {
            window.open(path, target);
        } else {
            router.push(path);
        }
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-slate-600 bg-opacity-20 backdrop-filter backdrop-blur-[0.05rem]"
                    onClick={toggleMenu}></div>
            )}

            <div className="lg:hidden w-full">
                <div className="w-full flex justify-end">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-2xl text-slate-600">
                        <CgMenuRight />
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            ref={menuRef}
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            exit={{ x: "-100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                            }}
                            className="p-4 fixed top-0 left-0 w-72 h-full bg-[#ecf2f5] text-md text-slate-700 overflow-hidden">
                            <button
                                onClick={toggleMenu}
                                className="absolute top-0 left-0 text-2xl p-4">
                                <CgClose />
                            </button>

                            <div className="flex flex-col text-md text-slate-700 h-full mt-14 overflow-auto">
                                {NAV_ITEMS.map((item, idx) => (
                                    <div
                                        onClick={() => navigate(item.path)}
                                        key={idx}
                                        className="py-6 cursor-pointer border-b border-slate-400">
                                        {item.title}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};
