import Navbar from '../components/Navbar'
import DrawerAppBar from '../components/MobileDrawer'
import Header from '../components/Header'
import Benifits from '../components/Benifits'
import Discover from '../components/Discover'
import Collection from '../components/Collection'
import ListCollection from '../components/ListCollection'
import Sell from '../components/Sell'
import '../App.css'

export default function Home() {
    return (
        <div>
            <div className='lg:hidden'>
                <DrawerAppBar />
            </div>
            <div className='border-b border-slate-300 hidden lg:block'>
                <div className='px-5 xl:px-0 max-w-6xl mx-auto'>
                    <Navbar />
                </div>
            </div>
            <section className='px-5 xl:px-0 max-w-6xl mx-auto'>
                <Header />
            </section>
            <section className='bg-[#F8F9FB] py-10 mt-10'>
                <div className='px-5 xl:px-0 max-w-6xl mx-auto'>
                    <Benifits />
                </div>
            </section>
            <section>
                <div className='px-5 xl:px-0 max-w-6xl mx-auto my-36'>
                    <ListCollection />
                </div>
            </section>
            <section className='bg-[#F8F9FB] py-16 mt-10'>
                <div className='px-5 xl:px-0 max-w-6xl mx-auto'>
                    <Collection />
                </div>
            </section>
            <section className='my-24'>
                <div className='px-5 xl:px-0 max-w-6xl mx-auto'>
                    <Sell />
                </div>
            </section>
            <section className='bg-[#F8F9FB] py-16 mt-10'>
                <div className='px-5 xl:px-0 max-w-6xl mx-auto'>
                    <Discover />
                </div>
            </section>
        </div>
    )
}
