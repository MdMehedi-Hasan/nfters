import { FaEthereum } from 'react-icons/fa'

export default function SliderCard({data}) {
    return (
        <div className='w-full h-full relative'>
            <img className='w-full h-full rounded-2xl' src={data} alt="" />
            <div className='absolute top-5 left-4 text-white'>
                <h5 className='text-lg'>Abstr Gradient NFT</h5>
                <div className='flex items-center gap-2'>
                    <img className='!w-6 h-6 rounded-full object-cover' src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?t=st=1723320980~exp=1723324580~hmac=c96b10d078a8b57bed6733562ed1fb34732a026f82d4fae602492b9a17ff8120&w=826" alt="avatar" />
                    <span className='text-sm'>Arkhan17</span>
                </div>
            </div>
            <div className='text-white p-2 text-sm absolute bottom-4 w-10/12 left-1/2 transform -translate-x-1/2 flex justify-between items-center glassEffect'>
                <div>
                    <span>Current Bid</span>
                    <p className='flex items-center'><FaEthereum /> 0.25 ETH</p>
                </div>
                <div>
                    <span>Ends in</span>
                    <p>12h 43m 42s</p>
                </div>
            </div>
        </div>
    )
}
