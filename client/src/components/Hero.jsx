import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="max-w-7xl mx-auto py-20">
            <div className="lg:grid lg:grid-cols-2">
                <div className="max-w-md mx-auto my-auto">
                    <h1 className="text-4xl sm:text-6xl font-extrabold">Plan trips the</h1>
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-pink-600">Modern way.</h1>
                    <p className="mt-3 sm:text-2xl text-xl text-slate-500">AI-generated travel iteneraries for <b>anywhere</b> in the United States.</p>
                    
                    {/* Hero Left Button Section */}
                    <div className="flex space-x-3 mt-4">
                    {/* px-6 py-3 bg-pink-600 text-lg font-semibold text-white rounded shadow */}
                        <button className="px-6 py-3 bg-red-600 text-lg font-semibold text-white rounded lg:bg-pink-600">
                            <Link href="#">Generate a plan</Link>
                        </button>

                        <button className="px-6 py-3 bg-slate-600 text-lg font-semibold text-white rounded">
                            <Link href="#">I'm feeling adventerous</Link>
                        </button>

                    </div>

                    <p className="mt-2 text-sm text-slate-500">Made with ❤️ at HackTX 2022</p>
                </div>
                <div className="max-w-lg mx-auto mt-16 lg:mt-0 pt-12 sm:px-0 px-4">
                    <Image className="rounded-xl object-fit" src="/rome.jpeg" width={1280} height={628} />
                    <div className="flex justify-between">
                        <div></div>
                        <div>
                            <p className="text-slate-500">How about a trip to Rome? 🏛</p>
                        </div>

                        

                    </div>
                </div>
            </div>
        </div>
    )
}