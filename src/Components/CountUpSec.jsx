import CountUp from 'react-countup'

export default function CountUpSec() {
    return (
        <div>
            <div className='flex gap-5'>
                <CountUp
                    start={0}
                    end={98}
                    duration={3}
                >
                    {({ countUpRef }) => (
                        <div>
                        <div>
                            <span className='text-xl font-semibold' ref={countUpRef} />
                            <span className='text-xl font-semibold'>K+</span>
                        </div>
                        <span>Artwork</span>
                    </div>
                    )}
                </CountUp>
                <CountUp
                    start={0}
                    end={12}
                    duration={3}
                >
                    {({ countUpRef }) => (
                        <div>
                        <div>
                            <span className='text-xl font-semibold' ref={countUpRef} />
                            <span className='text-xl font-semibold'>K+</span>
                        </div>
                        <span>Auction</span>
                    </div>
                    )}
                </CountUp>
                <CountUp
                    start={0}
                    end={15}
                    duration={3}
                >
                    {({ countUpRef }) => (
                        <div>
                            <div>
                                <span className='text-xl font-semibold' ref={countUpRef} />
                                <span className='text-xl font-semibold'>K+</span>
                            </div>
                            <span>Artist</span>
                        </div>
                    )}
                </CountUp>
            </div>
        </div>
    )
}
