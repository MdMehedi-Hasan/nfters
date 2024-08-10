import PrimaryButton from '../Components/PrimaryButton'
import BannerSlider from '../Components/BannerSlider'
import SingleCard from '../components/SingleCard'
import CollectionCard from '../components/CollectionCard'
import SideCard from '../components/SideCard'
import ListCard from '../components/ListCard'
import CountUpSec from '../components/CountUpSec'

export default function Home() {
    return (
        <div className="m-10">
            <PrimaryButton message="Upload" />
            <div className='w-3/6 bg-red-100'>
                <BannerSlider />
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
            <CountUpSec/>
        </div>
    )
}
