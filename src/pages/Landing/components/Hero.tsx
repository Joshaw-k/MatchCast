import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <main className="flex justify-center items-center px-16 py-16 bg-white max-md:px-5">
            <section className="justify-between w-full max-w-[1568px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                            <h1 className="text-4xl font-semibold text-black leading-relaxed max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
                                Discover and Engage with NFTs you love
                            </h1>
                            <p className="mt-4 text-lg text-gray-700 leading-loose max-md:max-w-full">
                                Explore and connect with NFT holders based on your preferences.
                            </p>
                            <Link to="/explore" className="justify-center self-start px-8 py-2.5 mt-9 text-white bg-blue-600 shadow-sm rounded-[32px] max-md:px-5">
                                Explore NFTs
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            src="nfthero.png"
                            alt="NFT showcase"
                            className="grow w-full aspect-[1.61] max-md:mt-10 max-md:max-w-full"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};