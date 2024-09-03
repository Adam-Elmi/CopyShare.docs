export function Console({children}) {
    return (
        <div className="w-full h-[320px] bg-[#112] rounded-lg overflow-hidden relative flex flex-col">
            <div className="h-[50px] bg-gray-800 px-2 py-3 flex justify-start items-center">
                <p className="ml-5 text-yellow-400 font-bold text-[1rem]">Console</p>
            </div>
                <div className="pl-5">
                    {children}
                </div>
        </div>
    )
};