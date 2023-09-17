import { useState } from "react";
import Avatar from "../public/vercel.svg";
import Image from "next/image";
import ReactFlagsSelect from "react-flags-select";
import ReactLanguageSelect from 'react-languages-select';

const Nav = ({ isSideBarOpen, setIsSideBarOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("US")
    return (
        <div className="w-full">
            <div className="hidden sm:flex bg-[#15132B]  flex-row text-black justify-between items-center px-2 py-5 md:py-4 drop-shadow-lg">
                {!isSideBarOpen ? <button
                    className="flex flex-row items-center text-slate-500 font-medium bg-[#15132B]  text-black justify-between items-center px-2"
                    onClick={() => {
                        setIsSideBarOpen(!isSideBarOpen);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#7879F1]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button> : ''}
                <button className='flex items-center bg-[#211A75] text-md gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-full lg:w-1/3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#7879F1] w-4 h-4 sm:w-6 sm:h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <div className='hidden lg:block md:ml-1 text-[#AAAAAA]'>Search Users</div>
                </button>
                <div className="flex items-center gap-1 md:gap-5">
                    <h2 className='text-xs py-2 text-[#6418C3] underline underline-offset-auto font-bold'>OTHER MENUS</h2>
                    <div className="flex gap-2">
                        <div className='relative flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#7879F1]">
                                <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
                            </svg>
                            <div className='absolute bottom-3 text-xs left-3 bg-[#5ECFFF] text-[#0D0B21] p-1 font-bold rounded-full'>12</div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className='relative flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-slate-500">
                                <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z" clipRule="evenodd" />
                            </svg>
                            <div className='absolute bottom-3 text-xs left-3 bg-[#5ECFFF] text-[#0D0B21] p-1 px-2 font-bold rounded-full'>5</div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className='relative flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#7879F1]">
                                <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z" clipRule="evenodd" />
                            </svg>
                            <div className='absolute bottom-3 text-xs left-3 bg-[#5ECFFF] text-[#0D0B21] p-1 px-2 font-bold rounded-full'>2</div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className='relative flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#7879F1]">
                                <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
                            </svg>
                            <div className='absolute bottom-3 text-xs left-3 bg-[#E328AF] text-[#0D0B21] p-1 px-3 font-bold rounded-full'>!</div>
                        </div>
                    </div>
                </div>
                <ReactFlagsSelect
                    className="menu-flags bg-[#211A75]  rounded-full"
                    selectButtonClassName="menu-flags-button bg-[#211A75]  text-style"
                    selected={selected}
                    onSelect={code => setSelected(code)}
                    countries={["US", "IN", "FR"]}
                    customLabels={{ US: "ENGLISH", IN: "HINDI", FR: "FRENCH" }}
                    placeholder="Select Language"
                    optionsSize={12}
                    selectedSize={12}
                    searchable
                />
                <div className="flex flex-row gap-1 md:gap-2 lg:gap-3 items-center">
                    <div className='bg-[#C4C4C4] h-8 w-8 md:h-12 md:w-12 rounded-md'></div>
                    <div className="flex flex-col gap-1 md:gap-2 items-start">
                        <h5 className="text-sm text-white font-bold">
                            Instructor Day
                        </h5>
                        <h6 className="text-xs font-medium text-[#7879F1]">
                            Super Admin
                        </h6>
                    </div>
                    &nbsp;&nbsp;
                    <button
                        className="flex items-center"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-8 h-8 text-[#6418C3]"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
            {isOpen ? (
                <div className="flex justify-end">
                    <div className="bg-white text-slate-700 font-medium text-sm w-1/6 rounded-b-lg absolute z-10 drop-shadow-lg">
                        <button
                            className="flex gap-1 w-full justify-start p-4 hover:bg-slate-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            Logout
                        </button>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Nav;
