import { PaperAirplaneIcon } from "@heroicons/react/outline";



export default function Newsletter() {
  return (
    <div className="bg-green-50 p-2 my-10 py-10">
        <div className="flex flex-col items-center justify-center gap-7">
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-800">Newsletter</h1>
            <p className="text-gray-600 text-lg">Get timely updates from your favorite product</p>
            <div className="flex items-center border border-gray-300 w-full max-w-[500px]">
                <input type="text" placeholder="your email" className="flex-1 p-1 outline-none focus:ring-0"  />
                <PaperAirplaneIcon className="p-1 bg-green-600 text-white h-8 rotate-90" />
            </div>
        </div>
    </div>
  )
}
