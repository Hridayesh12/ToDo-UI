const MainDivHeader = () => {
    return (
        <div className='w-full flex gap-3 md:gap-0 flex-col md:flex-row items-center justify-between bg-[#15132B] p-3 py-4 rounded-lg'>
            <div className='flex flex-row gap-4 items-start justify-start flex-1'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#A5A5A5] pt-2">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
                </svg>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold text-white text-lg md:text-3xl'>School November Tasks</p>
                    <p className='font-medium text-[#A5A5A5] text-xs md:text-sm'>Created by Instructor Day on November 31, 2022</p>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-2'>
                        <div className='flex w-32 flex-row justify-center'>
                            <div className='relative flex w-full'>
                                <div className='border-2 border-[#15132B] w-8 h-8 bg-[#C4C4C4] rounded-full'>
                                </div>
                                <div className='border-2 border-[#15132B] absolute left-[24px] w-8 h-8 bg-[#C4C4C4] rounded-full'>
                                </div>
                                <div className='border-2 border-[#15132B] absolute left-[48px] w-8 h-8 bg-[#C4C4C4] rounded-full'>
                                </div>
                                <div className='border-2 border-[#15132B] absolute left-[72px] w-8 h-8 bg-[#C4C4C4] rounded-full'>
                                </div>
                                <div className='font-bold text-white text-xs flex items-center justify-center border-2 border-[#15132B] absolute left-[96px] w-8 h-8 bg-[#E328AF] rounded-full'>
                                    5+
                                </div>
                            </div>
                        </div>
                        <button className='text-white rounded-md bg-[#6418C3] flex items-center justify-center text-sm font-medium gap-2 px-2 py-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                            </svg>
                            Invite People
                        </button>
                        <button className='text-white rounded-md border-2 border-[#7879F1] flex items-center justify-center text-sm font-medium gap-2 px-2 py-1'>
                            Private
                        </button>
                        <button className='text-white rounded-md bg-[#7879F1] flex items-center justify-center text-sm font-medium gap-2 px-2 py-1'>
                            Edit
                        </button>
                        <button className='text-white rounded-md border-2 border-[#7879F1] flex items-center justify-center text-sm font-medium gap-2 px-2 py-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
                            </svg>
                            45
                            Comments
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col items-end gap-5 flex-1'>
                <div className="w-full flex flex-row gap-1 md:gap-2 lg:gap-3 items-center justify-end">
                    <div className="flex flex-col gap-1 md:gap-2 items-end">
                        <h5 className="text-sm md:text-lg text-white font-bold">
                            Centered Martial Arts
                        </h5>
                        <p className='font-medium text-[#A5A5A5] text-xs md:text-sm'>Sunnyvale, Ca</p>
                    </div>
                    <div className='bg-[#C4C4C4] h-8 w-8 md:h-12 md:w-12 rounded-md'></div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-slate-500">
                        <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className='w-full flex flex-row items-center justify-end gap-2'>
                    <p className='text-sm md:text-base font-semibold text-white'>Total Progress 60%</p>
                    <div className='relative w-3/5 bg-[#1E1C3A] h-1 md:h-2 rounded-full'>
                        <div className='absolute w-3/4 bg-[#6418C3] h-1 md:h-2 rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainDivHeader