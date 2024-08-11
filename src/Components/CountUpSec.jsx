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
                                <span className='text-2xl font-extrabold' ref={countUpRef} />
                                <span className='text-2xl font-semibold'>K+</span>
                            </div>
                            <span className='text-sm text-slate-500'>Artwork</span>
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
                                <span className='text-2xl font-extrabold' ref={countUpRef} />
                                <span className='text-2xl font-semibold'>K+</span>
                            </div>
                            <span className='text-sm text-slate-500'>Auction</span>
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
                                <span className='text-2xl font-extrabold' ref={countUpRef} />
                                <span className='text-2xl font-semibold'>K+</span>
                            </div>
                            <span className='text-sm text-slate-500'>Artist</span>
                        </div>
                    )}
                </CountUp>
            </div>
        </div>
    )
}
