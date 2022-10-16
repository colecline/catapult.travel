import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Trip from "../components/Trip";

export default function Home() {
    const [isLoading, setLoading] = useState(false);
    const [isLoaded, setLoaded] = useState(false);

    const [cityName, setCityName] = useState("");
    const [citySummary, setCitySummary] = useState("");
    const [cityImage, setCityImage] = useState("");

    const [hotelName, setHotelName] = useState("");
    const [hotelAddress, setHotelAddress] = useState("");
    const [hotelImage, setHotelImage] = useState("");

    const [activity1Name, setActivity1Name] = useState("");
    const [activity1Address, setActivity1Address] = useState("");
    const [activity1Image, setActivity1Image] = useState("");

    const [activity2Name, setActivity2Name] = useState("");
    const [activity2Address, setActivity2Address] = useState("");
    const [activity2Image, setActivity2Image] = useState("");

    const [activity3Name, setActivity3Name] = useState("");
    const [activity3Address, setActivity3Address] = useState("");
    const [activity3Image, setActivity3Image] = useState("");

    const [activity4Name, setActivity4Name] = useState("");
    const [activity4Address, setActivity4Address] = useState("");
    const [activity4Image, setActivity4Image] = useState("");

    const [activity5Name, setActivity5Name] = useState("");
    const [activity5Address, setActivity5Address] = useState("");
    const [activity5Image, setActivity5Image] = useState("");

    const [activity6Name, setActivity6Name] = useState("");
    const [activity6Address, setActivity6Address] = useState("");
    const [activity6Image, setActivity6Image] = useState("");

    const [activity7Name, setActivity7Name] = useState("");
    const [activity7Address, setActivity7Address] = useState("");
    const [activity7Image, setActivity7Image] = useState("");

    const [activity8Name, setActivity8Name] = useState("");
    const [activity8Address, setActivity8Address] = useState("");
    const [activity8Image, setActivity8Image] = useState("");

    const [activity9Name, setActivity9Name] = useState("");
    const [activity9Address, setActivity9Address] = useState("");
    const [activity9Image, setActivity9Image] = useState("");

    const [activity10Name, setActivity10Name] = useState("");
    const [activity10Address, setActivity10Address] = useState("");
    const [activity10Image, setActivity10Image] = useState("");

    const [restaurant1Name, setRestaurant1Name] = useState("");
    const [restaurant1Address, setRestaurant1Address] = useState("");
    const [restaurant1Image, setRestaurant1Image] = useState("");

    const [restaurant2Name, setRestaurant2Name] = useState("");
    const [restaurant2Address, setRestaurant2Address] = useState("");
    const [restaurant2Image, setRestaurant2Image] = useState("");

    const [restaurant3Name, setRestaurant3Name] = useState("");
    const [restaurant3Address, setRestaurant3Address] = useState("");
    const [restaurant3Image, setRestaurant3Image] = useState("");

    const [restaurant4Name, setRestaurant4Name] = useState("");
    const [restaurant4Address, setRestaurant4Address] = useState("");
    const [restaurant4Image, setRestaurant4Image] = useState("");

    const [restaurant5Name, setRestaurant5Name] = useState("");
    const [restaurant5Address, setRestaurant5Address] = useState("");
    const [restaurant5Image, setRestaurant5Image] = useState("");

    const [restaurant6Name, setRestaurant6Name] = useState("");
    const [restaurant6Address, setRestaurant6Address] = useState("");
    const [restaurant6Image, setRestaurant6Image] = useState("");

    const [restaurant7Name, setRestaurant7Name] = useState("");
    const [restaurant7Address, setRestaurant7Address] = useState("");
    const [restaurant7Image, setRestaurant7Image] = useState("");

    const [restaurant8Name, setRestaurant8Name] = useState("");
    const [restaurant8Address, setRestaurant8Address] = useState("");
    const [restaurant8Image, setRestaurant8Image] = useState("");

    const [restaurant9Name, setRestaurant9Name] = useState("");
    const [restaurant9Address, setRestaurant9Address] = useState("");
    const [restaurant9Image, setRestaurant9Image] = useState("");

    const [restaurant10Name, setRestaurant10Name] = useState("");
    const [restaurant10Address, setRestaurant10Address] = useState("");
    const [restaurant10Image, setRestaurant10Image] = useState("");



    
    async function generatePlan() {
        setLoading(true);
        let response = await fetch("https://api.catapult.travel/generate", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(result => {
            result.json().then(data => ({
                data: data
            })
        ).then(resu => {
            setCityName(resu.data.city_name);
            setCitySummary(resu.data.city_summary);
            setCityImage(resu.data.city_image)

            setHotelName(resu.data.hotel_name);
            setHotelAddress(resu.data.hotel_address);
            setHotelImage(resu.data.hotel_img);

            setActivity1Name(resu.data.activities[0].activity_name);
            setActivity1Address(resu.data.activities[0].activity_address);
            setActivity1Image(resu.data.activities[0].activity_img);

            setActivity2Name(resu.data.activities[1].activity_name);
            setActivity2Address(resu.data.activities[1].activity_address);
            setActivity2Image(resu.data.activities[1].activity_img);

            setActivity3Name(resu.data.activities[2].activity_name);
            setActivity3Address(resu.data.activities[2].activity_address);
            setActivity3Image(resu.data.activities[2].activity_img);

            setActivity4Name(resu.data.activities[3].activity_name);
            setActivity4Address(resu.data.activities[3].activity_address);
            setActivity4Image(resu.data.activities[3].activity_img);

            setActivity5Name(resu.data.activities[4].activity_name);
            setActivity5Address(resu.data.activities[4].activity_address);
            setActivity5Image(resu.data.activities[4].activity_img);

            setActivity6Name(resu.data.activities[5].activity_name);
            setActivity6Address(resu.data.activities[5].activity_address);
            setActivity6Image(resu.data.activities[5].activity_img);

            setActivity7Name(resu.data.activities[6].activity_name);
            setActivity7Address(resu.data.activities[6].activity_address);
            setActivity7Image(resu.data.activities[6].activity_img);
            
            setActivity8Name(resu.data.activities[7].activity_name);
            setActivity8Address(resu.data.activities[7].activity_address);
            setActivity8Image(resu.data.activities[7].activity_img);

            setActivity9Name(resu.data.activities[8].activity_name);
            setActivity9Address(resu.data.activities[8].activity_address);
            setActivity9Image(resu.data.activities[8].activity_img);

            setActivity10Name(resu.data.activities[9].activity_name);
            setActivity10Address(resu.data.activities[9].activity_address);
            setActivity10Image(resu.data.activities[9].activity_img);

            setRestaurant1Name(resu.data.restaurants[0].restaurant_name);
            setRestaurant1Address(resu.data.restaurants[0].restaurant_address);
            setRestaurant1Image(resu.data.restaurants[0].restaurant_img);

            setRestaurant2Name(resu.data.restaurants[1].restaurant_name);
            setRestaurant2Address(resu.data.restaurants[1].restaurant_address);
            setRestaurant2Image(resu.data.restaurants[1].restaurant_img);

            setRestaurant3Name(resu.data.restaurants[2].restaurant_name);
            setRestaurant3Address(resu.data.restaurants[2].restaurant_address);
            setRestaurant3Image(resu.data.restaurants[2].restaurant_img);
            
            setRestaurant4Name(resu.data.restaurants[3].restaurant_name);
            setRestaurant4Address(resu.data.restaurants[3].restaurant_address);
            setRestaurant4Image(resu.data.restaurants[3].restaurant_img);

            setRestaurant5Name(resu.data.restaurants[4].restaurant_name);
            setRestaurant5Address(resu.data.restaurants[4].restaurant_address);
            setRestaurant5Image(resu.data.restaurants[4].restaurant_img);

            setRestaurant6Name(resu.data.restaurants[5].restaurant_name);
            setRestaurant6Address(resu.data.restaurants[5].restaurant_address);
            setRestaurant6Image(resu.data.restaurants[5].restaurant_img);

            setRestaurant7Name(resu.data.restaurants[6].restaurant_name);
            setRestaurant7Address(resu.data.restaurants[6].restaurant_address);
            setRestaurant7Image(resu.data.restaurants[6].restaurant_img);

            setRestaurant8Name(resu.data.restaurants[7].restaurant_name);
            setRestaurant8Address(resu.data.restaurants[7].restaurant_address);
            setRestaurant8Image(resu.data.restaurants[7].restaurant_img);

            setRestaurant9Name(resu.data.restaurants[8].restaurant_name);
            setRestaurant9Address(resu.data.restaurants[8].restaurant_address);
            setRestaurant9Image(resu.data.restaurants[8].restaurant_img);

            setRestaurant10Name(resu.data.restaurants[9].restaurant_name);
            setRestaurant10Address(resu.data.restaurants[9].restaurant_address);
            setRestaurant10Image(resu.data.restaurants[9].restaurant_img);

        })
        }).catch(err => console.log(err));
        

        setLoading(false);
        setLoaded(true);

    }

    return (
        <>
        <div className="max-w-7xl mx-auto py-20">
            <div className="lg:grid lg:grid-cols-2">
                <div className="max-w-md mx-auto my-auto">
                    <h1 className="text-4xl sm:text-6xl font-extrabold">Plan trips in a</h1>
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-pink-600">fun way.</h1>
                    <span className="mt-3 sm:text-2xl text-xl text-pink-600 font-bold">AI</span>
                    <span className="mt-3 sm:text-2xl text-xl text-slate-500">-generated travel iteneraries for <b>anywhere</b> in the United States.</span>
                    
                    {/* Hero Left Button Section */}
                    <div className="flex space-x-3 mt-4">
                    {/* px-6 py-3 bg-pink-600 text-lg font-semibold text-white rounded shadow */}
                        <button onClick={() => generatePlan()} className="px-6 py-3 bg-red-600 text-lg font-semibold text-white rounded lg:bg-pink-600">
                            <Link href="">{isLoading ? "Loading" : "Generate a random travel plan"}</Link>
                        </button>

                    </div>

                    <p className="mt-2 text-sm text-slate-500">Made with ❤️ at HackTX 2022</p>
                </div>
                <div className="max-w-lg mx-auto mt-16 lg:mt-0 pt-12 sm:px-0 px-4">
                    <Image className="rounded-xl object-fit" src="/austin.webp" width={1280} height={628} />
                    <div className="flex justify-between">
                        <div></div>
                        <div>
                            <p className="text-slate-500">How about a trip to Austin? 🏛</p>
                        </div>

                        

                    </div>
                </div>
            </div>
        </div>

        <Trip
        isLoaded={isLoaded}
        cityName={cityName}
        citySummary={citySummary}
        cityImage={cityImage}
        hotelName={hotelName}
        hotelAddress={hotelAddress}
        hotelImage={hotelImage}
        activity1Name={activity1Name}
        activity1Address={activity1Address}
        activity1Image={activity1Image}
        activity2Name={activity2Name}
        activity2Address={activity2Address}
        activity2Image={activity2Image}
        activity3Name={activity3Name}
        activity3Address={activity3Address}
        activity3Image={activity3Image}
        activity4Name={activity4Name}
        activity4Address={activity4Address}
        activity4Image={activity4Image}
        activity5Name={activity5Name}
        activity5Address={activity5Address}
        activity5Image={activity5Image}
        activity6Name={activity6Name}
        activity6Address={activity6Address}
        activity6Image={activity6Image}
        activity7Name={activity7Name}
        activity7Address={activity7Address}
        activity7Image={activity7Image}
        activity8Name={activity8Name}
        activity8Address={activity8Address}
        activity8Image={activity8Image}
        activity9Name={activity9Name}
        activity9Address={activity9Address}
        activity9Image={activity9Image}
        activity10Name={activity10Name}
        activity10Address={activity10Address}
        activity10Image={activity10Image}
        restaurant1Name={restaurant1Name}
        restaurant1Address={restaurant1Address}
        restaurant1Image={restaurant1Image}
        restaurant2Name={restaurant2Name}
        restaurant2Address={restaurant2Address}
        restaurant2Image={restaurant2Image}
        restaurant3Name={restaurant3Name}
        restaurant3Address={restaurant3Address}
        restaurant3Image={restaurant3Image}
        restaurant4Name={restaurant4Name}
        restaurant4Address={restaurant4Address}
        restaurant4Image={restaurant4Image}
        restaurant5Name={restaurant5Name}
        restaurant5Address={restaurant5Address}
        restaurant5Image={restaurant5Image}
        restaurant6Name={restaurant6Name}
        restaurant6Address={restaurant6Address}
        restaurant6Image={restaurant6Image}
        restaurant7Name={restaurant7Name}
        restaurant7Address={restaurant7Address}
        restaurant7Image={restaurant7Image}
        restaurant8Name={restaurant8Name}
        restaurant8Address={restaurant8Address}
        restaurant8Image={restaurant8Image}
        restaurant9Name={restaurant9Name}
        restaurant9Address={restaurant9Address}
        restaurant9Image={restaurant9Image}
        restaurant10Name={restaurant10Name}
        restaurant10Address={restaurant10Address}
        restaurant10Image={restaurant10Image}
        />
        </>
    )
}
