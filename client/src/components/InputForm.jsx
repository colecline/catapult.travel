export default function InputForm() {
    return (
        <section className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 p-5">
                <span className="text-3xl font-bold text-center">I want to travel to</span>

                <form className="text-center">
                    <input className="focus:outline-none mt-4 text-center text-2xl px-20 py-6 bg-slate-200 rounded-xl shadow-lg" type="text" name="city" placeholder="Austin, TX" />
                    <br />
                    <button className="bg-pink-600 text-white px-6 py-3 font-semibold text-lg rounded mt-4" type="submit" value="Submit">Generate a travel plan.</button>
                </form>
                
            </div>
        </section>
    )
}