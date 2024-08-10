import SingleCard from '../components/SingleCard'
import CollectionCard from '../components/CollectionCard'
import SideCard from '../components/SideCard'
import ListCard from '../components/ListCard'
import Navbar from '../components/Navbar'
import DrawerAppBar from '../components/MobileDrawer'
import '../App.css'
import Header from '../components/Header'
import Benifits from '../components/Benifits'
import Discover from '../components/Discover'

export default function Home() {
    return (
        <div>
            <div className='lg:hidden'>
                <DrawerAppBar />
            </div>
            <div className='border-b border-slate-300 hidden lg:block'>
                <div className='max-w-6xl mx-auto'>
                    <Navbar />
                </div>
            </div>
            <section className='max-w-6xl mx-auto'>
                <Header />
            </section>
            <section className='bg-[#F8F9FB] py-10 mt-10'>
                <div className='max-w-6xl mx-auto'>
                    <Benifits />
                </div>
            </section>
            <section>
                <div className='max-w-6xl mx-auto'>
                    <Discover />
                </div>
            </section>

            {/* <div className='grid grid-cols-4 gap-5'>
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
            </div> */}
        </div>
    )
}
