import * as React from "react";

export const Footer = () => {
    return (
        <div>
            <div className="px-10 py-10 bg-white text-black flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="text-xl font-semibold text-black max-md:max-w-full">
                            MatchCast
                        </div>
                        <div className="mt-5 text-sm leading-9 text-gray-800 max-md:max-w-full">
                            Platform for discovering and connecting with NFT holders
                        </div>
                        <div className="mt-5 text-sm font-medium leading-9 text-black max-md:mt-10 max-md:max-w-full">
                            Connect with us:
                        </div>
                        <div className="flex gap-5 justify-between self-start mt-2">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b596cbd8259a564a26a8255f7447b839b1bd41b1bff38a0a4179ac9499e87db9?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                                className="shrink-0 w-6 aspect-square"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d01df0334e81c81603e2382dd6c246777868ea7ab576e5d91d62543c277553de?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                                className="shrink-0 w-6 aspect-square"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb2c89a2b41924dd0c56870b97744731647064d11f685bd1793754e56e082e14?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                                className="shrink-0 w-6 aspect-square"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                    <div className="justify-between px-5 mt-2 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow text-sm text-black whitespace-nowrap max-md:mt-10">
                                    <div className="text-sm font-medium">Collections</div>
                                    <div className="mt-8 text-gray-700">Matching</div>
                                    <div className="mt-6 text-gray-700">Connections</div>
                                    <div className="mt-6 text-gray-700">Premium</div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow text-sm text-black max-md:mt-10">
                                    <div className="text-sm font-medium">Creators</div>
                                    <div className="mt-8 text-gray-700">About Us</div>
                                    <div className="mt-6 text-gray-700">Opportunities</div>
                                    <div className="mt-6 text-gray-700">Updates</div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow text-sm text-black whitespace-nowrap max-md:mt-10">
                                    <div className="text-sm font-medium">Resources</div>
                                    <div className="mt-8 text-gray-700">Blog</div>
                                    <div className="mt-6 text-gray-700">FAQs</div>
                                    <div className="mt-6 text-gray-700">Assistance</div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow text-sm text-black max-md:mt-10">
                                    <div className="text-sm font-medium">Support</div>
                                    <div className="mt-8 text-gray-700">Chat</div>
                                    <div className="mt-6 text-gray-700">Feedback</div>
                                    <div className="mt-6 text-gray-700">Contact Us</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}