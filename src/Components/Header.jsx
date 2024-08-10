import React from 'react'
import PrimaryButton from './common/PrimaryButton'
import CountUpSec from './CountUpSec'
import BannerSlider from '../components/BannerSlider'

export default function Header() {
    return (
        <div className='grid grid-cols-12 items-center gap-10'>
            <div className='col-span-6'>
                <h1 className='text-4xl archivo'>DISCOVER, AND COLLECT DIGITAL ART NFTS</h1>
                <p className='w-8/12 text-slate-600 mt-3 mb-6'>Digital marketplace for crypto collectibles and non-fungible token (NFTs). Buy, Sell and discover exclusive digital assets.</p>
                <PrimaryButton message="Explore Now" />
                <div className='mt-5'>
                    <CountUpSec />
                </div>
            </div>
            <div className='col-span-6'>
                <BannerSlider />
            </div>
        </div>
    )
}
