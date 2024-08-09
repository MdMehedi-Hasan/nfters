import React from 'react'
import PrimaryButton from '../Components/PrimaryButton'
import BannerSlider from '../Components/BannerSlider'

export default function Home() {
    return (
        <div className="m-10">
            <PrimaryButton message="Upload" />
            <div className='w-3/6 bg-red-100'>
                <BannerSlider />
            </div>
        </div>
    )
}
