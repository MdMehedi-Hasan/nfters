import { FaEthereum } from 'react-icons/fa'
import ListCard from './common/ListCard'
import SideCard from './common/SideCard'
import imagesCollection from '../data/Imagecollection'

export default function ListCollection() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 gap-y-16 lg:gap-y-0'>
            <div className='flex flex-col'>
                <img className='h-full w-full object-cover rounded-xl' src="https://img.freepik.com/free-vector/gradient-colorful-grainy-dynamic-background_52683-101908.jpg?t=st=1723331847~exp=1723335447~hmac=9092e7cabc3440e26f2a11bfa06e527bf832fd116d23e841fc34ccc3f09ee849&w=826" alt="" />
                <div className='flex items-center justify-between mt-4'>
                    <div className='flex items-center gap-2'>
                        <img className='w-10 h-10 object-cover rounded-full' src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?t=st=1723331596~exp=1723335196~hmac=19f565f48f9ee744f105c506595aafdc5b10d854f0ac6353de0fadd4fdbe65ea&w=826" alt="" />
                        <div>
                            <h6 className='font-semibold'>The Futr Abstract</h6>
                            <span className='text-sm text-slate-500'>10 in the stock</span>
                        </div>
                    </div>
                    <div>
                        <span className='text-xs text-slate-500'>Highest Bid</span>
                        <p className='flex items-center gap-1'><FaEthereum />0.25 ETH</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                {imagesCollection.slice(7, 10).map((item, index) => <SideCard data={item} key={index} />)}
            </div>
            <div className='lg:border-l px-4'>
                <h2 className='text-xl archivo'>TOP COLLECTIONS OVER</h2>
                <span className='text-[#3D00B7] text-sm font-semibold'>Last 7 days</span>
                <div className='flex flex-col gap-5 mt-5'>
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                </div>
            </div>
        </div>
    )
}
