import { FaEthereum } from "react-icons/fa";

export default function CollectionCard() {
    return (
        <div>
            <div className="grid grid-cols-12 items-stretch gap-3">
                <div className="col-span-9">
                    <img className="w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1618397746666-63405ce5d015?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="flex flex-col gap-3 col-span-3">
                    <img className="w-full rounded-lg" src="https://images.unsplash.com/photo-1618397746666-63405ce5d015?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <img className="w-full rounded-lg" src="https://images.unsplash.com/photo-1618397746666-63405ce5d015?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <img className="w-full rounded-lg" src="https://images.unsplash.com/photo-1618397746666-63405ce5d015?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
            <div>
                <h2 className="font-semibold text-xl mt-5 mb-3">Amazin Collection</h2>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img className="w-10 h-10 rounded-full object-cover" src="https://img.freepik.com/free-photo/portrait-young-stylish-laughing-model-gray-casual-summer-clothes-brown-hat-with-natural-makeup_158538-11679.jpg?t=st=1723276641~exp=1723280241~hmac=ecf3aadf9023143393ffa055b37b549fdcf4d4d41c6341d963db4514a2206267&w=826" alt="" />
                        <span>by Arkhan</span>
                    </div>
                    <p className="border-2 border-blue-500 text-blue-500 rounded-full px-2 py-1">Total 54 items</p>
                </div>
            </div>
        </div>
    )
}
