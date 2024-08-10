import PrimaryButton from '../Components/PrimaryButton'
import BannerSlider from '../Components/BannerSlider'
import SingleCard from '../components/SingleCard'
import CollectionCard from '../components/CollectionCard'
import SideCard from '../components/SideCard'
import ListCard from '../components/ListCard'
import CountUpSec from '../components/CountUpSec'
import Navbar from '../components/Navbar'
import DrawerAppBar from '../components/MobileDrawer'
import '../App.css'

export default function Home() {
    return (
        <div>
            <div className='lg:hidden'>
                <DrawerAppBar />
            </div>
            <div className='border-b border-slate-300 hidden lg:block'>
                <div className='max-w-6xl mx-auto px-5'>
                    <Navbar />
                </div>
            </div>
            <div className='flex justify-end'>
                <div className='w-3/6'>
                    <BannerSlider />
                </div>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                <SingleCard />
            </div>
            <div className='grid grid-cols-3 gap-8'>
                <CollectionCard />
            </div>
            <div>
                <SideCard />
            </div>
            <div>
                <ListCard />
            </div>
            <CountUpSec />
        </div>
    )
}
