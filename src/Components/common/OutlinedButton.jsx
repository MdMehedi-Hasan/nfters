export default function OutlinedButton({message}) {
  return (
    <button className='border-2 border-primary hover:bg-[#3D00B7] text-primary hover:text-white px-4 py-1 rounded-full transition-all ease-in-out'>{message}</button>
  )
}
