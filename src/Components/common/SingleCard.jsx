import { Avatar, AvatarGroup, createTheme, ThemeProvider } from '@mui/material'
import { FaEthereum } from "react-icons/fa";

export default function SingleCard({data}) {
    return (
        <div className='rounded-lg p-2 shadow bg-white'>
            <div className='relative mb-8'>
                <img className='rounded-lg w-full h-44' src={data} alt="" />
                {/* Avatar */}
                <div className='absolute -bottom-5 left-3'>
                    <ThemeProvider
                        theme={createTheme({
                            components: {
                                MuiAvatarGroup: {
                                    styleOverrides: {
                                        root: ({ ownerState: { max } }) => ({
                                            ...[...Array(max)].reduce(
                                                (result, curr, index) => ({
                                                    ...result,
                                                    [`& > .MuiAvatar-root:nth-child(${index + 1})`]: {
                                                        zIndex: max - index
                                                    }
                                                }),
                                                {}
                                            )
                                        })
                                    }
                                }
                            }
                        })}
                    >
                        <AvatarGroup total={4} cascade="above" sx={{ '& .MuiAvatar-root': { width: 30, height: 30, fontSize: '16px' } }}>
                            <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?t=st=1723266022~exp=1723269622~hmac=47d1b80af30f7f1a17146294bfd5cf8511bb41c4058a63be93b73ff45210e29b&w=740" />
                            <Avatar alt="Travis Howard" src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149619505.jpg?t=st=1723266231~exp=1723269831~hmac=a822d20b71219ae421e11614bb354d014197653016e516c96e0e058e2de88830&w=740" />
                            <Avatar alt="Agnes Walker" src="https://img.freepik.com/free-photo/cartoon-woman-wearing-glasses_23-2151136851.jpg?t=st=1723266284~exp=1723269884~hmac=ebfa6d4b1005e897272afd2671cc0ea04ef170f6a435a39a25396b1df9e62940&w=826" />
                            <Avatar alt="Trevor Henderson" src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136883.jpg?t=st=1723266344~exp=1723269944~hmac=7748e3b5db4c9b18957553324db305e5bd6b13566011017f43a4bdf0c8eef46a&w=826" />
                        </AvatarGroup>
                    </ThemeProvider>
                </div>
            </div>
            <div className='px-3'>
                <h5 className='font-semibold text-lg'>ArtCrypto</h5>
                <div className='flex justify-between'>
                    <span className='flex items-center text-green-500 text-xs'><FaEthereum />0.23ETH</span>
                    <span className='text-slate-500 text-xs'>1 of 221</span>
                </div>
                <div className='flex items-center justify-between text-primary pt-3 mt-4 border-t'>
                    <p className='bg-purple-200 px-2 py-1 rounded-full text-xs'>2h 30m 50s left</p>
                    <button className='text-sm'>Place a bid</button>
                </div>
            </div>
        </div>
    )
}
