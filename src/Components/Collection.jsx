import CollectionCard from "./common/CollectionCard";

export default function Collection() {
    return (
        <div>
            <h1 className='text-2xl font-bold archivo'>COLLECTION FEATURED NFTS</h1>
            <div className='grid grid-cols-3 gap-8'>
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
            </div>
        </div>
    )
}
