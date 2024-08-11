import imagesCollection from "../data/Imagecollection";
import CollectionCard from "./common/CollectionCard";

export default function Collection() {
    console.log('collection', imagesCollection.slice(0, 4))
    return (
        <div>
            <h1 className='text-2xl font-bold archivo mb-5'>COLLECTION FEATURED NFTS</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <CollectionCard data={imagesCollection.slice(0, 4)} />
                <CollectionCard data={imagesCollection.slice(6, 10)} />
                <CollectionCard data={imagesCollection.slice(12, 16)} />
            </div>
        </div>
    )
}
