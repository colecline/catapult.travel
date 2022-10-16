import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import Day from "../../components/Trip/Day";

export default function PlanPage() {
    return (
        <>
        <div className="max-w-7xl mx-auto relative mt-10">
            <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <span className="uppercase font-extrabold text-sm shadow-lg">Trip Guide for</span>
                <br />
                <span className="text-4xl font-extrabold shadow-lg">Austin, TX</span>
                <br />
                <span className="shadow-lg">There is so much to talk about Austin I don't even know what to mention.</span>
            </div>
            <Image className="brightness-75 rounded-xl object-cover shadow-xl" src="/rome.jpeg" width={1280} height={328} />
        
        </div>

        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        </>
    )
}