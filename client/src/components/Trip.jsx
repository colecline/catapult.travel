import Image from "next/image";
import { useState } from "react";

export default function Trip(props) {

    if (props.isLoaded) {
        return (
            <>
            <div className="max-w-7xl mx-auto relative mt-10">
                <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <span className="uppercase font-extrabold text-sm shadow-lg">Trip Guide for</span>
                    <br />
                    <span className="text-4xl font-extrabold shadow-lg">{props.cityName}</span>
                    <br />
                    <span className="shadow-lg">{props.citySummary}</span>
                </div>
                <img className="w-full h-96 brightness-50 rounded-xl object-cover shadow-xl" src={props.cityImage} />
            
            </div>

            <div className="max-w-7xl mx-auto mt-10 bg-slate-100 p-10 rounded-lg">
                <h1 className="text-4xl font-bold mb-2">Hotel</h1>
                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.hotelImage} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">{props.hotelName} </h2>
                        <p>{props.hotelAddress}</p>
                    </div>
                </div>
            </div>



            <div className="max-w-7xl mx-auto mt-10 bg-slate-100 p-10 rounded-lg">
                <h1 className="text-4xl font-bold mb-2">Day 1</h1>
                <hr></hr>
                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.restaurant1Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">Lunch at {props.restaurant1Name} </h2>
                        <p>{props.restaurant1Address}</p>
                    </div>
                </div>

                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.activity1Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">{props.activity1Name} </h2>
                        <p>{props.activity1Address}</p>
                    </div>
                </div>

                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.activity2Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">{props.activity2Name} </h2>
                        <p>{props.activity2Address}</p>
                    </div>
                </div>

                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.restaurant2Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">Dinner at {props.restaurant2Name} </h2>
                        <p>{props.restaurant2Address}</p>
                    </div>
                </div>
                

    
            </div>


            <div className="max-w-7xl mx-auto mt-10 bg-slate-100 p-10 rounded-lg">
                <h1 className="text-4xl font-bold mb-2">Day 2</h1>
                <hr></hr>
                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.restaurant3Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">Lunch at {props.restaurant3Name} </h2>
                        <p>{props.restaurant3Address}</p>
                    </div>
                </div>

                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.activity3Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">{props.activity3Name} </h2>
                        <p>{props.activity3Address}</p>
                    </div>
                </div>

                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.activity4Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">{props.activity4Name} </h2>
                        <p>{props.activity4Address}</p>
                    </div>
                </div>

                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.restaurant4Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">Dinner at {props.restaurant4Name} </h2>
                        <p>{props.restaurant4Address}</p>
                    </div>
                </div>
                

    
            </div>



            <div className="max-w-7xl mx-auto mt-10 bg-slate-100 p-10 rounded-lg">
                <h1 className="text-4xl font-bold mb-2">Day 3</h1>
                <hr></hr>
                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.restaurant5Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">Lunch at {props.restaurant5Name} </h2>
                        <p>{props.restaurant5Address}</p>
                    </div>
                </div>

                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.activity5Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">{props.activity5Name} </h2>
                        <p>{props.activity5Address}</p>
                    </div>
                </div>

                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.activity6Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">{props.activity6Name} </h2>
                        <p>{props.activity6Address}</p>
                    </div>
                </div>

                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.restaurant6Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">Dinner at {props.restaurant6Name} </h2>
                        <p>{props.restaurant6Address}</p>
                    </div>
                </div>
                

    
            </div>


            <div className="max-w-7xl mx-auto mt-10 bg-slate-100 p-10 rounded-lg">
                <h1 className="text-4xl font-bold mb-2">Day 4</h1>
                <hr></hr>
                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.restaurant7Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">Lunch at {props.restaurant7Name} </h2>
                        <p>{props.restaurant7Address}</p>
                    </div>
                </div>

                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.activity7Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">{props.activity7Name} </h2>
                        <p>{props.activity7Address}</p>
                    </div>
                </div>

                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.activity8Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">{props.activity8Name} </h2>
                        <p>{props.activity8Address}</p>
                    </div>
                </div>

                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.restaurant8Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">Dinner at {props.restaurant8Name} </h2>
                        <p>{props.restaurant8Address}</p>
                    </div>
                </div>
                

    
            </div>


            <div className="max-w-7xl mx-auto mt-10 bg-slate-100 p-10 rounded-lg">
                <h1 className="text-4xl font-bold mb-2">Day 5</h1>
                <hr></hr>
                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.restaurant9Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">Lunch at {props.restaurant9Name} </h2>
                        <p>{props.restaurant9Address}</p>
                    </div>
                </div>

                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.activity9Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">{props.activity9Name} </h2>
                        <p>{props.activity9Address}</p>
                    </div>
                </div>

                <div className="flex space-x-6 mt-5">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.activity10Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">{props.activity10Name} </h2>
                        <p>{props.activity10Address}</p>
                    </div>
                </div>

                <div className="flex space-x-6 mt-5 mb-10">
                    <img className="rounded-xl object-cover h-40 w-72" src={props.restaurant10Image} />
                    <div>
                        <h2 className="text-xl font-bold mt-1">Dinner at {props.restaurant10Name} </h2>
                        <p>{props.restaurant10Address}</p>
                    </div>
                </div>
                

    
            </div>

            </>
        )
    } else {
        return (
            <>

            </>
        )
    }
}