import SingleCard from './SingleCard'
import OutlinedButton from './OutlinedButton';
import Badge from './common/Badge';
import { useState } from 'react';
import { IoFilterSharp } from 'react-icons/io5';

export default function Discover() {
    const [activeBadge, setActiveBadge] = useState('All Categories')
    const collections = 16
    const mappableCollection = Array.from({ length: collections }, (_, index) => index);
    const badges = ['All Categories', 'Art', 'Celebrities', 'Gaming', 'Sport', 'Music', 'Crypto']
    return (
        <div>
            <h1 className='text-2xl font-bold archivo'>DISCOVER MORE NFTS</h1>
            <div className='flex items-center justify-between mt-5 mb-6'>
                <div className='flex items-center gap-3'>
                    {badges.map((item, index) => <Badge key={index} label={item} active={item === activeBadge} setActiveBadge={setActiveBadge} />)}
                </div>
                <button className='flex items-center gap-1 text-purple-700 bg-purple-200 rounded-full px-3 py-1 text-sm'><IoFilterSharp />All Filters</button>
            </div>
            <div className='grid grid-cols-4 gap-x-8 gap-y-10'>
                {mappableCollection.map((item, index) => <SingleCard key={index} />)}
            </div>
            <div className='flex justify-center items-center mt-10'>
                <OutlinedButton message="More NFTs" />
            </div>
        </div>
    )
}
