import T1 from "../assets/test1.jpeg";
import T2 from "../assets/test2.jpeg";

export default function testimonial() {
    return (
        <div>
            <div className="relative rounded-xl overflow-auto p-8 hoover:animate-pulse">
                <div className="overflow-hidden relative max-w-md mx-auto bg-white-shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
                <img src={T1} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"/>
                <div className="min-w-0 py-5 pl-28 pr-5">
                <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                    Name goes here
                </div>
                <div></div>
                </div>
            </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}