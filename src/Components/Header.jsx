import PrimaryButton from './common/PrimaryButton'
import CountUpSec from './CountUpSec'
import BannerSlider from '../components/BannerSlider'

export default function Header() {
    return (
        <div className='flex flex-col md:flex-row items-center gap-10'>
            <div className='w-full md:w-1/2'>
                <h1 className='text-center md:text-start text-3xl md:text-4xl archivo'>DISCOVER, AND COLLECT DIGITAL ART NFTS</h1>
                <p className='text-center md:text-start mx-auto md:mx-0 w-8/12 text-slate-600 mt-3 mb-6'>Digital marketplace for crypto collectibles and non-fungible token (NFTs). Buy, Sell and discover exclusive digital assets.</p>
                <div className='flex justify-center md:justify-start'>
                <PrimaryButton message="Explore Now" />
                </div>
                <div className='mt-5 flex items-center justify-center md:justify-start'>
                    {/* <CountUpSec /> */}
                    <ul className='flex items-center gap-10'>
                        <li className='flex flex-col'>
                            <span className='text-2xl font-extrabold'>98k+</span>
                            <span className='text-slate-500 text-sm'>Artwork</span>
                        </li>
                        <li className='flex flex-col'>
                            <span className='text-2xl font-extrabold'>12k+</span>
                            <span className='text-slate-500 text-sm'>Auction</span>
                        </li>
                        <li className='flex flex-col'>
                            <span className='text-2xl font-extrabold'>15k+</span>
                            <span className='text-slate-500 text-sm'>Artist</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-full md:w-1/2'>
                <BannerSlider />
            </div>
        </div>
    )
}
