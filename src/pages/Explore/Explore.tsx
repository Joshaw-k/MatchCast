import React from 'react'
import Gallery from './components/Gallery'
import { Discover } from './components/Discover'

const Explore = () => {
    return (
        <div className='bg-white text-black'>
            <img src="explore.png" alt="" />
            <div className='bg-blue-600 py-4 text-center'>Discover and Engage NFTs you love</div>
            <div className='px-10 py-10 flex gap-20'>
                <div>
                    <h2 className='mb-6 font-semibold'>Filter</h2>
                    <div className='flex flex-col gap-4'>
                        <div><p>Style</p></div>
                        <div><p>Rarity</p></div>
                        <div><p>Edition</p></div>
                        <div><p>Category</p></div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-5 w-fit mb-10 text-sm justify-between text-zinc-700 max-md:flex-wrap">
                        <div className="justify-center px-5 py-2 bg-white shadow-xl rounded-[32px] max-md:px-5">
                            Art
                        </div>
                        <div className="justify-center px-5 py-2 bg-white shadow-xl rounded-[32px] max-md:px-5">
                            Photography
                        </div>
                        <div className="justify-center px-5 py-2 bg-white shadow-xl rounded-[32px] max-md:px-5">
                            Animation
                        </div>
                        <div className="justify-center px-5 py-2 bg-white shadow-xl rounded-[32px] max-md:px-5">
                            Music
                        </div>
                    </div>
                    <Gallery />
                </div>
            </div>
            <Discover />
        </div>
    )
}

export default Explore