import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import OutlinedButton from './OutlinedButton'

export default function SideCard({data}) {
    return (
        <div className='grid grid-cols-6 gap-5'>
            <img className='w-full h-full object-cover col-span-2 rounded-lg' src={data} alt="" />
            <div className='col-span-4'>
                <h4 className='font-semibold text-lg'>The furtd disc</h4>
                <div className='flex items-center gap-2 mb-3'>
                    <img className='w-10 h-10 rounded-full object-cover' src="https://img.freepik.com/free-photo/portrait-young-stylish-laughing-model-gray-casual-summer-clothes-brown-hat-with-natural-makeup_158538-11679.jpg?t=st=1723276641~exp=1723280241~hmac=ecf3aadf9023143393ffa055b37b549fdcf4d4d41c6341d963db4514a2206267&w=826" alt="" />
                    <div className='text-green-500 border border-green-500 rounded p-1 text-xs flex items-center'>
                        <FaEthereum />
                        <span>0.25 ETH</span>
                    </div>
                    <span className='text-xs text-slate-500'>1 of 8</span>
                </div>
                <OutlinedButton message="Place a bid"/>
            </div>
        </div>
    )
}
