import SideNavBar from '../components/SideNav'
import '../styles/globals.css'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return <div className="bg-[#0D0B21] flex flex-row w-screen min-h-screen h-fit overflow-hidden">
    <SideNavBar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
    <div className="w-full"><Component {...pageProps} isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
    </div>
  </div>
}

export default MyApp
