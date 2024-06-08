import Footer from "@/components/footer";
import Nav from "@/components/nav";
import React from "react";

import Link from "next/link";

const page = () => {
  return (
    <>
      <Nav />
      <main className="container mx-auto my-4">
        <div className="flex gap-1 text-sm font-semibold text-slate-700">
          <Link href="/" className="underline">
            Home
          </Link>
          /
          <Link href="/sale" className="underline">
            Sales
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
