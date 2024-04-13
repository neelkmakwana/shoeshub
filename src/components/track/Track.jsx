const Track = () => {
    return (
        <section>
            <div className=" container mx-auto px-5 py-10 md:py-14">
                {/* main  */}
                <div className="flex flex-wrap -m-4 text-center">
                    {/* Track 1 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-indigo-600 border-indigo-400 bg-cyan-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
                        <img src="https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/sneakers.png?alt=media&token=34327507-90df-463b-afe4-ae1a3c14fa92" className="w-24 h-24 mb-3 inline-block" alt="Premium Tshirts Image" />

                            <h2 className="title-font font-medium text-lg text-gray-900" >Premium Sports Shoes</h2>
                            <p className="leading-relaxed">Our Sports Shoes are 100% Verified.
                            </p>
                        </div>
                    </div>

                    {/* Track 2 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                    <div className="border-2 hover:shadow-xl hover:shadow-indigo-600 border-indigo-400 bg-cyan-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
                        
                             <img src="https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/heel1.png?alt=media&token=12e97016-7dbf-4f52-87f3-5e0b89b20ea9" className="w-24 h-24 mb-3 inline-block" alt="Premium Tshirts Image" />

                            <h2 className="title-font font-medium text-lg text-gray-900" >Premium Heels</h2>
                            <p className="leading-relaxed">Our Women Heels are 100% Verified.
                            </p>
                        </div>
                    </div>

                    {/* Track 3  */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                    <div className="border-2 hover:shadow-xl hover:shadow-indigo-600 border-indigo-400 bg-cyan-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
                        <img src="https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/shoe2.png?alt=media&token=09271d00-4b1b-4b5e-b1fb-8be37aee9aa1" className="w-24 h-24 mb-3 inline-block" alt="Premium Tshirts Image" />

                            <h2 className="title-font font-medium text-lg text-gray-900" >Premium Casual Shoes</h2>
                            <p className="leading-relaxed">Our Casual Shoes are 100% Verified.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Track;