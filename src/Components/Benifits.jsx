import { FaRegChartBar } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";

export default function Benifits() {
    return (
        <div className="flex flex-col lg:flex-row items-start gap-16">
            <h2 className="text-xl font-semibold archivo md:w-7/12">THE AMAZING NFT ART OF THE WORLD HERE</h2>
            <ul className="flex flex-col md:flex-row items-center gap-10">
                <li className="flex items-start gap-3">
                    <GrDocumentPerformance className="text-5xl h-auto mt-1"/>
                    <div>
                        <h6 className="font-semibold">Fast Transaction</h6>
                        <p className="text-sm text-slate-500 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam doloribus tempora nobis at delectus vero molestias? Unde, quod ad.</p>
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <FaRegChartBar className="text-5xl h-auto mt-1"/>
                    <div>
                        <h6 className="font-semibold">Growth Transaction</h6>
                        <p className="text-sm text-slate-500 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam doloribus tempora nobis at delectus vero molestias? Unde, quod ad.</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
