export function Code({title ,children}) {
    return (
        <div className="w-full relative h-fit  flex justify-center items-center max-md:w-full max-md:max-w-[100%]">
                        <div className="w-full bg-[#112] rounded-lg overflow-hidden relative flex flex-col">
                            <div className="h-[50px] bg-gray-800 px-2 py-3 flex justify-start items-center">
                                <p className="ml-5 text-white"><span className="text-violet-400 font-bold">{title}</span> method</p>
                            </div>
                            <div className="h-fit">
                                {children}
                            </div>
                        </div>
                    </div>
    )
}