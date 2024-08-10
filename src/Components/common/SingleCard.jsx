import { Avatar, AvatarGroup, createTheme, ThemeProvider } from '@mui/material'
import { FaEthereum } from "react-icons/fa";

export default function SingleCard() {
    return (
        <div className='rounded-lg p-2 shadow'>
            <div className='relative mb-8'>
                <img className='rounded-lg w-full' src="data:image/jpeg;base64,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" alt="" />
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
                        <AvatarGroup total={4} cascade="above" sx={{ '& .MuiAvatar-root': { width: 30, height: 30, fontSize:'16px' } }}>
                            <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?t=st=1723266022~exp=1723269622~hmac=47d1b80af30f7f1a17146294bfd5cf8511bb41c4058a63be93b73ff45210e29b&w=740" />
                            <Avatar alt="Travis Howard" src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149619505.jpg?t=st=1723266231~exp=1723269831~hmac=a822d20b71219ae421e11614bb354d014197653016e516c96e0e058e2de88830&w=740" />
                            <Avatar alt="Agnes Walker" src="https://img.freepik.com/free-photo/cartoon-woman-wearing-glasses_23-2151136851.jpg?t=st=1723266284~exp=1723269884~hmac=ebfa6d4b1005e897272afd2671cc0ea04ef170f6a435a39a25396b1df9e62940&w=826" />
                            <Avatar alt="Trevor Henderson" src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136883.jpg?t=st=1723266344~exp=1723269944~hmac=7748e3b5db4c9b18957553324db305e5bd6b13566011017f43a4bdf0c8eef46a&w=826" />
                        </AvatarGroup>
                    </ThemeProvider>
                </div>
            </div>
            <h5 className='font-semibold text-lg'>ArtCrypto</h5>
            <div className='flex justify-between'>
                <span className='flex items-center text-green-500'><FaEthereum />0.23ETH</span>
                <span>1 of 221</span>
            </div>
            <div className='flex items-center justify-between text-purple-600'>
                <p className='bg-red-100 px-2 py-1 rounded-full'>2h 30m 50s left</p>
                <button>Place a bid</button>
            </div>
        </div>
    )
}
