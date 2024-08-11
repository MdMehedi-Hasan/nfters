export default function Badge({label,active,setActiveBadge}) {
  return (
      <button className={`${active ? 'bg-primary text-white':'bg-slate-100 hover:bg-[#3D00B7] hover:text-white text-black'} px-3 py-1 rounded-full transition-all ease-in-out text-sm`} onClick={()=>setActiveBadge(label)}>{label}</button>
  )
}
