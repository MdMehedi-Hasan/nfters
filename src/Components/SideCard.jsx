import React from 'react'
import { FaEthereum } from 'react-icons/fa'

export default function SideCard() {
    return (
        <div className='grid grid-cols-6 gap-5'>
            <img className='col-span-2 rounded-lg' src="https://images.unsplash.com/photo-1618397746666-63405ce5d015?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='col-span-4'>
                <h4 className='font-semibold text-lg'>The furtd disc</h4>
                <div className='flex items-center gap-2'>
                    <img className='w-10 h-10 rounded-full object-cover' src="https://img.freepik.com/free-photo/portrait-young-stylish-laughing-model-gray-casual-summer-clothes-brown-hat-with-natural-makeup_158538-11679.jpg?t=st=1723276641~exp=1723280241~hmac=ecf3aadf9023143393ffa055b37b549fdcf4d4d41c6341d963db4514a2206267&w=826" alt="" />
                    <div className='text-green-500 border border-green-500 rounded p-1 text-xs flex items-center'>
                        <FaEthereum />
                        <span>0.25 ETH</span>
                    </div>
                    <span className='text-xs'>1 of 8</span>
                </div>
                <button className='text-purple-500 border border-purple-500 px-2 mt-3 py-1 hover:bg-purple-500 rounded-full'>Place a bid</button>
            </div>
        </div>
    )
}
