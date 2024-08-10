import SingleCard from '../components/common/SingleCard'
import CollectionCard from '../components/common/CollectionCard'
import SideCard from '../components/common/SideCard'
import ListCard from '../components/common/ListCard'
import Navbar from '../components/Navbar'
import DrawerAppBar from '../components/MobileDrawer'
import '../App.css'
import Header from '../components/Header'
import Benifits from '../components/Benifits'
import Discover from '../components/Discover'
import Collection from '../components/Collection'
import ListCollection from '../components/ListCollection'

export default function Home() {
    return (
        <div>
            {/* <div className='lg:hidden'>
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
                <div className='max-w-6xl mx-auto my-36'>
                    <ListCollection />
                </div>
            </section>
            <section className='bg-[#F8F9FB] py-16 mt-10'>
                <div className='max-w-6xl mx-auto'>
                    <Collection />
                </div>
            </section> */}
            <section>
                <div className='px-5 xl:px-0 max-w-6xl mx-auto'>
                    <Discover />
                </div>
            </section>
        </div>
    )
}
