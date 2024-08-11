import { CiSearch } from "react-icons/ci";
import PrimaryButton from "./common/PrimaryButton";
import OutlinedButton from "./common/OutlinedButton";

export default function Navbar() {
    return (
        <div className="grid grid-cols-2 lg:gap-8 xl:gap-36 items-center py-5">
            <ul className="flex items-center justify-between">
                <li><h2 className="text-2xl text-primary archivo">NFTERS</h2></li>
                <li className="font-semibold">Marketplace</li>
                <li className="font-semibold">Resource</li>
                <li className="font-semibold">About</li>
            </ul>
            <div className="flex items-center justify-between">
                {/* Search bar */}
                <div className="relative">
                    <input type="text" className="rounded-full border border-slate-300 hover:border-slate-400 transition-all ease-in-out px-4 py-1" placeholder="Search" />
                    <CiSearch className="text-2xl absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer bg-white"/>
                </div>
                <PrimaryButton message="Upload" />
                <OutlinedButton message="Connect Wallet" />
            </div>
        </div>
    )
}
