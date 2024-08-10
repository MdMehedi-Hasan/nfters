import { FaEthereum } from 'react-icons/fa'
import badge from '../assets/icons/correct.png'

export default function ListCard() {
    return (
        <div className='flex items-center gap-3'>
            <div className='relative'>
                <img className='w-10 h-10 rounded-full object-cover' src="https://img.freepik.com/free-photo/person-wearing-colorful-fashion_23-2151038233.jpg?t=st=1723287875~exp=1723291475~hmac=7a1c112a69267e5c7e51edfa3d2df47bc9380bf6af07ed26cae3223974549143&w=826" alt="" />
                <img className='w-5 absolute -top-1 -right-1' src={badge} alt="" />
            </div>
            <div>
                <span className='font-semibold'>CryptoFunks</span>
                <span className='flex items-center text-xs'><FaEthereum />19,769.39</span>
            </div>
            <span className='font-semibold text-green-500'>+26.52%</span>
        </div>
    )
}
