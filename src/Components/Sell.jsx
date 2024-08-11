import asidesell from '../assets/sell_aside.png'

export default function Sell() {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center gap-16 md:gap-36'>
            <div className='md:w-1/2 relative'>
                <img className='w-full' src={asidesell} alt="" />
            </div>
            <div className='md:w-1/2'>
                <h1 className='md:w-5/6 text-center md:text-start text-3xl md:text-4xl archivo'>CREATE AND SELL YOUR NFTS</h1>
                <p className='mt-6 mb-4 text-center md:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque aliquam similique voluptates maiores quasi asperiores sequi expedita recusandae vero fugit voluptatem nesciunt quidem corporis ex, repellat enim dolor libero! Harum consectetur soluta officiis suscipit eveniet necessitatibus esse sit distinctio.</p>
                <div className='flex justify-center md:justify-start'>
                    <button className='bg-primary py-2 px-4 rounded-full text-white hover:scale-105 transition-all ease-in-out'>Sign Up Now</button>
                </div>
            </div>
        </div>
    )
}
